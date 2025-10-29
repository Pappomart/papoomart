"use client";
import { SOCIAL } from "@/lib/social";
import { FaInstagram, FaFacebook, FaTiktok, FaYoutube, FaPinterest, FaXTwitter, FaWhatsapp } from "react-icons/fa6";

const items = [
  { href: SOCIAL.instagram, Icon: FaInstagram, label: "Instagram" },
  { href: SOCIAL.facebook,  Icon: FaFacebook,  label: "Facebook" },
  { href: SOCIAL.tiktok,     Icon: FaTiktok,    label: "TikTok" },
  { href: SOCIAL.youtube,    Icon: FaYoutube,   label: "YouTube" },
  { href: SOCIAL.pinterest,  Icon: FaPinterest, label: "Pinterest" },
  { href: SOCIAL.x,          Icon: FaXTwitter,  label: "X (Twitter)" },
  { href: SOCIAL.whatsapp,   Icon: FaWhatsapp,  label: "WhatsApp" },
];

export default function SocialIcons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {items.map(({ href, Icon, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-gray-700 hover:text-white hover:bg-pink-600 transition"
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}
