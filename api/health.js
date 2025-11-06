// Health check endpoint for Vercel
export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow GET requests
  if (req.method !== "GET") {
    return res.status(405).json({ 
      status: "error", 
      message: "Method not allowed" 
    });
  }

  return res.status(200).json({ 
    status: "ok", 
    timestamp: new Date().toISOString(),
    service: "Papatya Vadisi API"
  });
}

