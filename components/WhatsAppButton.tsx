// components/WhatsAppButton.tsx
import { FaWhatsapp } from "react-icons/fa";
const phone = process.env.NEXT_PUBLIC_WHATSAPP || "51997374878";
export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${phone}?text=${encodeURIComponent("Hola DonaSonrisas 👋 Me gustaría ayudar.")}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir chat de WhatsApp"
      className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-[9999] rounded-full p-4 shadow-lg bg-green-500 text-white hover:bg-green-600 transition"
      style={{ lineHeight: 0 }}
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
