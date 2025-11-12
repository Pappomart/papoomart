// components/ImpactCard.tsx
export default function ImpactCard({ value, label }:{ value:string; label:string; }) {
  return (
    <div className="card p-6 text-center">
      <div className="text-3xl md:text-4xl font-bold">{value}</div>
      <div className="text-gray-600 mt-2">{label}</div>
    </div>
  );
}
