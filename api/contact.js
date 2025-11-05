import nodemailer from "nodemailer";

// Email transporter configuration
const createTransporter = async () => {
  const emailUser = process.env.EMAIL_USER || "papatyavadisi80@gmail.com";
  const emailPass = process.env.EMAIL_PASS;

  if (!emailPass) {
    console.warn("⚠️ EMAIL_PASS not configured. Email sending will be skipped.");
    return null;
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: emailUser,
      pass: emailPass,
    },
    pool: true,
    maxConnections: 1,
    maxMessages: 3,
    secure: true,
    tls: {
      rejectUnauthorized: false
    }
  });

  try {
    await transporter.verify();
    console.log("✅ Email transporter verified successfully");
    return transporter;
  } catch (error) {
    console.error("❌ Email transporter verification failed:", error.message);
    return null;
  }
};

// Email templates
const createAdminEmailTemplate = (data, language = "tr") => {
  const { project, name, phone, email, message } = data;
  const date = new Date().toLocaleString(language === "tr" ? "tr-TR" : "en-US");
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin: 0; padding: 0; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; background-color: #f5f5f5;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 15px;">
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <tr>
                <td style="background: linear-gradient(135deg, #C7A664 0%, #B89654 100%); padding: 25px; text-align: center;">
                  <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: bold;">
                    🏡 Papatya Vadisi
                  </h1>
                  <p style="margin: 8px 0 0 0; color: #ffffff; font-size: 14px; opacity: 0.95;">
                    ${language === "tr" ? "Yeni İletişim Formu" : "New Contact Form"}
                  </p>
                </td>
              </tr>
              <tr>
                <td style="padding: 25px;">
                  <h2 style="margin: 0 0 20px 0; color: #333333; font-size: 18px; font-weight: bold; border-bottom: 2px solid #C7A664; padding-bottom: 10px;">
                    ${language === "tr" ? "Form Bilgileri" : "Form Information"}
                  </h2>
                  <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 15px;">
                    ${project ? `
                    <tr>
                      <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0;">
                        <strong style="color: #C7A664; font-size: 12px; text-transform: uppercase; display: inline-block; min-width: 80px;">
                          ${language === "tr" ? "PROJE" : "PROJECT"}:
                        </strong>
                        <span style="color: #333333; font-size: 14px;">${project}</span>
                      </td>
                    </tr>
                    ` : ""}
                    ${name ? `
                    <tr>
                      <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0;">
                        <strong style="color: #C7A664; font-size: 12px; text-transform: uppercase; display: inline-block; min-width: 80px;">
                          ${language === "tr" ? "İSİM" : "NAME"}:
                        </strong>
                        <span style="color: #333333; font-size: 14px;">${name}</span>
                      </td>
                    </tr>
                    ` : ""}
                    ${phone ? `
                    <tr>
                      <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0;">
                        <strong style="color: #C7A664; font-size: 12px; text-transform: uppercase; display: inline-block; min-width: 80px;">
                          ${language === "tr" ? "TELEFON" : "PHONE"}:
                        </strong>
                        <a href="tel:${phone.replace(/\s/g, '')}" style="color: #333333; text-decoration: none; font-size: 14px;">
                          ${phone}
                        </a>
                      </td>
                    </tr>
                    ` : ""}
                    ${email ? `
                    <tr>
                      <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0;">
                        <strong style="color: #C7A664; font-size: 12px; text-transform: uppercase; display: inline-block; min-width: 80px;">
                          ${language === "tr" ? "E-POSTA" : "EMAIL"}:
                        </strong>
                        <a href="mailto:${email}" style="color: #333333; text-decoration: none; font-size: 14px;">
                          ${email}
                        </a>
                      </td>
                    </tr>
                    ` : ""}
                    ${message ? `
                    <tr>
                      <td style="padding: 12px 0;">
                        <strong style="color: #C7A664; font-size: 12px; text-transform: uppercase; display: block; margin-bottom: 8px;">
                          ${language === "tr" ? "MESAJ" : "MESSAGE"}:
                        </strong>
                        <div style="color: #333333; font-size: 14px; line-height: 1.5; background-color: #fafafa; padding: 12px; border-left: 3px solid #C7A664; border-radius: 4px;">
                          ${message.replace(/\n/g, "<br>")}
                        </div>
                      </td>
                    </tr>
                    ` : ""}
                  </table>
                  <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #e0e0e0; color: #999999; font-size: 11px;">
                    <p style="margin: 3px 0;">
                      <strong>${language === "tr" ? "Dil" : "Language"}:</strong> ${language === "tr" ? "Türkçe" : "English"} | 
                      <strong>${language === "tr" ? "Tarih" : "Date"}:</strong> ${date}
                    </p>
                  </div>
                </td>
              </tr>
              <tr>
                <td style="background-color: #f9f9f9; padding: 15px; text-align: center; border-top: 2px solid #C7A664;">
                  <p style="margin: 0; color: #666666; font-size: 11px;">
                    ${language === "tr" 
                      ? "Bu email Papatya Vadisi web sitesinden otomatik olarak gönderilmiştir." 
                      : "This email was automatically sent from the Papatya Vadisi website."}
                  </p>
                  <p style="margin: 5px 0 0 0; color: #999999; font-size: 10px;">
                    Kadirli, Osmaniye
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
};

const createThankYouEmailTemplate = (data, language = "tr") => {
  const { name, project } = data;
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin: 0; padding: 0; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; background-color: #f5f5f5;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 15px;">
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <tr>
                <td style="background: linear-gradient(135deg, #C7A664 0%, #B89654 100%); padding: 30px; text-align: center;">
                  <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: bold;">
                    ${language === "tr" ? "Teşekkür Ederiz!" : "Thank You!"}
                  </h1>
                  <p style="margin: 10px 0 0 0; color: #ffffff; font-size: 16px; opacity: 0.95;">
                    ${language === "tr" ? "Mesajınız başarıyla iletildi" : "Your message has been received"}
                  </p>
                </td>
              </tr>
              <tr>
                <td style="padding: 30px;">
                  <p style="margin: 0 0 15px 0; color: #333333; font-size: 16px; line-height: 1.6;">
                    ${language === "tr" 
                      ? `Sayın ${name || "Değerli Müşterimiz"},`
                      : `Dear ${name || "Valued Customer"},`}
                  </p>
                  <p style="margin: 0 0 15px 0; color: #333333; font-size: 14px; line-height: 1.6;">
                    ${language === "tr"
                      ? "Papatya Vadisi'ne ilginiz için teşekkür ederiz. Mesajınızı aldık ve en kısa sürede size ulaşacağız."
                      : "Thank you for your interest in Papatya Vadisi. We have received your message and will contact you shortly."}
                  </p>
                  ${project ? `
                  <p style="margin: 15px 0; color: #666666; font-size: 13px;">
                    <strong>${language === "tr" ? "Proje:" : "Project:"}</strong> ${project}
                  </p>
                  ` : ""}
                  <div style="margin-top: 25px; padding: 20px; background: linear-gradient(135deg, #C7A664 0%, #B89654 100%); border-radius: 8px; text-align: center;">
                    <p style="margin: 0; color: #ffffff; font-size: 16px; font-weight: 600;">
                      ${language === "tr" ? "Teşekkür Ederiz" : "Thank You"}
                    </p>
                    <p style="margin: 8px 0 0 0; color: #ffffff; font-size: 13px; opacity: 0.9;">
                      Papatya Vadisi Ekibi
                    </p>
                  </div>
                </td>
              </tr>
              <tr>
                <td style="background-color: #2c2c2c; padding: 20px; text-align: center;">
                  <p style="margin: 0 0 8px 0; color: #ffffff; font-size: 12px; font-weight: 500;">
                    Papatya Vadisi
                  </p>
                  <p style="margin: 0 0 10px 0; color: #aaaaaa; font-size: 11px;">
                    ${language === "tr" 
                      ? "Doğanın kalbinde modern yaşam" 
                      : "Modern life in the heart of nature"}
                  </p>
                  <p style="margin: 0; color: #888888; font-size: 10px;">
                    © 2025 Papatya Vadisi. ${language === "tr" ? "Tüm hakları saklıdır." : "All rights reserved."}
                  </p>
                  <p style="margin: 8px 0 0 0; color: #666666; font-size: 10px;">
                    Kadirli, Osmaniye
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
};

// Email validation
const isValidEmail = (email) => {
  if (!email) return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Vercel serverless function
export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ 
      success: false, 
      message: "Method not allowed" 
    });
  }

  try {
    const { project, phone, name, email, message, language = "tr" } = req.body;

    // Validation
    if (!phone && !email) {
      return res.status(400).json({ 
        success: false, 
        message: "Telefon veya email gereklidir" 
      });
    }

    // Email validation
    const validEmail = email && isValidEmail(email);

    const transporter = await createTransporter();

    // Email to admin
    const adminMailOptions = {
      from: `"Papatya Vadisi Web Sitesi" <${process.env.EMAIL_USER || "papatyavadisi80@gmail.com"}>`,
      to: "papatyavadisi80@gmail.com",
      replyTo: email || process.env.EMAIL_USER || "papatyavadisi80@gmail.com",
      subject: `🔔 ${language === "tr" ? "Yeni İletişim Formu" : "New Contact Form"} - ${project || (language === "tr" ? "Genel" : "General")}`,
      html: createAdminEmailTemplate({ project, name, phone, email, message }, language),
    };

    // Email to user (thank you email)
    let userMailOptions = null;
    
    if (validEmail) {
      userMailOptions = {
        from: `"Papatya Vadisi" <${process.env.EMAIL_USER || "papatyavadisi80@gmail.com"}>`,
        to: email,
        subject: language === "tr" 
          ? "Papatya Vadisi - Mesajınız İletildi!" 
          : "Papatya Vadisi - Your Message Has Been Received!",
        html: createThankYouEmailTemplate({ name, project }, language),
      };
    }

    // Send emails
    if (transporter) {
      try {
        // Send email to admin
        await transporter.sendMail(adminMailOptions);
        console.log("✅ Admin email sent successfully");
        
        // Send thank you email to user if email is provided AND valid
        if (userMailOptions) {
          try {
            await transporter.sendMail(userMailOptions);
            console.log(`✅ Thank you email sent successfully to ${email}`);
          } catch (userEmailError) {
            console.error("⚠️ User thank you email send error:", userEmailError.message);
          }
        }
      } catch (emailError) {
        console.error("⚠️ Admin email send error:", emailError.message);
        console.log("📝 Form submission received:", { project, name, phone, email });
      }
    } else {
      console.log("📝 Form submission received (email not configured):", { 
        project, 
        name, 
        phone, 
        email,
        timestamp: new Date().toISOString()
      });
    }

    // Always return success
    return res.status(200).json({
      success: true,
      message: language === "tr" 
        ? "Mesajınız başarıyla gönderildi. En kısa sürede size ulaşacağız." 
        : "Your message has been sent successfully. We will contact you shortly.",
    });
  } catch (error) {
    console.error("❌ Request processing error:", error);
    return res.status(500).json({
      success: false,
      message: language === "tr"
        ? "Bir hata oluştu. Lütfen tekrar deneyin."
        : "An error occurred. Please try again.",
      error: error.message,
    });
  }
}

