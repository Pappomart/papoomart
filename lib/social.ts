// lib/social.ts
export const BRAND = {
  name: "PapoomArt",
  phoneE164: "+51997374878",      // para WhatsApp / tel:
  phoneHuman: "+51 997 374 878",
  email: "papoomartperu@gmail.com",
  site: "https://papoomart.vercel.app", // cambia si usas dominio propio
};

// mismo @usuario en todas las redes
export const SOCIAL = {
  instagram: "https://instagram.com/PapoomArt",
  facebook: "https://facebook.com/PapoomArt",
  tiktok: "https://www.tiktok.com/@PapoomArt",
  youtube: "https://www.youtube.com/@PapoomArt",
  pinterest: "https://www.pinterest.com/PapoomArt",
  x: "https://x.com/PapoomArt", // Twitter/X
  threads: "https://www.threads.net/@PapoomArt",
  whatsapp: `https://wa.me/${BRAND.phoneE164.replace("+", "")}`,
  email: `mailto:${BRAND.email}`,
};
