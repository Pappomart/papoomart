// components/ProgramCard.tsx
import Link from "next/link";

export default function ProgramCard({ href, title, description }:{
  href:string; title:string; description:string;
}) {
  return (
    <Link href={href} className="card p-6 hover:shadow-lg transition">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600 mt-1">{description}</p>
      <span className="text-pink-600 mt-3 inline-block">Ver más →</span>
    </Link>
  );
}
