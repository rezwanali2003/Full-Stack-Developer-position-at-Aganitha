// src/validation.js

// Validate that string is a proper HTTP/HTTPS URL
export function isValidUrl(str) {
  if (typeof str !== "string" || !str.trim()) return false;
  try {
    const url = new URL(str.trim());
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

// Validate short code: [A-Za-z0-9]{6,8}
export function isValidCode(code) {
  if (typeof code !== "string") return false;
  const re = /^[A-Za-z0-9]{6,8}$/;
  return re.test(code);
}

// Generate random code of fixed length (default 6)
export function generateCode(length = 6) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i += 1) {
    const idx = Math.floor(Math.random() * chars.length);
    result += chars.charAt(idx);
  }
  return result;
}
