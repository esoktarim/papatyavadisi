// Vite proxy kullanıyorsa, development'ta /api kullan
// Production'da VITE_API_URL environment variable kullan
// Eğer VITE_API_URL yoksa ve production'daysa, backend server URL'ini kullan
const API_BASE_URL = import.meta.env.VITE_API_URL || 
  (import.meta.env.DEV ? "" : undefined);

export interface ContactFormData {
  project?: string;
  phone?: string;
  name?: string;
  email?: string;
  message?: string;
  language?: "tr" | "en";
}

export const sendContactEmail = async (data: ContactFormData) => {
  try {
    // Vite proxy development'ta /api kullanır
    // Production'da VITE_API_URL environment variable kullanılmalı
    const url = API_BASE_URL ? `${API_BASE_URL}/api/contact` : `/api/contact`;
    
    // Development'ta console log, production'da kapalı
    if (import.meta.env.DEV) {
      console.log("📤 Sending contact form to:", url);
      console.log("📋 Data:", data);
    }

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    // Development'ta console log
    if (import.meta.env.DEV) {
      console.log("📥 Response status:", response.status, response.statusText);
    }

    if (!response.ok) {
      const errorText = await response.text();
      
      if (import.meta.env.DEV) {
        console.error("❌ API Error Response:", errorText);
      }
      
      let errorData;
      try {
        errorData = JSON.parse(errorText);
      } catch {
        errorData = { message: errorText };
      }
      throw new Error(errorData.message || "Bir hata oluştu");
    }

    const result = await response.json();

    if (import.meta.env.DEV) {
      console.log("✅ API Success:", result);
    }

    return result;
  } catch (error) {
    // Production'da detaylı error log yok, sadece genel mesaj
    if (import.meta.env.DEV) {
      console.error("❌ API Error:", error);
      if (error instanceof Error) {
        console.error("Error message:", error.message);
      }
    }
    throw error;
  }
};

