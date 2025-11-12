// components/DonationWidget.tsx
import { useState } from "react";

const PRESETS = [20, 40, 80, 120];

export default function DonationWidget() {
  const [amount, setAmount] = useState<number>(40);
  const [freq, setFreq] = useState<"once"|"monthly">("once");
  const [email, setEmail] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/donate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount, freq, email }),
    });
    if (res.ok) {
      // aquí rediriges a la pasarela (Culqi/Mercado Pago/PayPal)
      alert("Gracias. Serás redirigido a la pasarela (placeholder).");
    } else {
      const t = await res.text().catch(()=> "");
      alert("No pudimos iniciar la donación.\n" + (t || ""));
    }
  };

  return (
    <form onSubmit={submit} className="grid md:grid-cols-[1fr,1fr] gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Monto</label>
        <div className="mt-2 flex flex-wrap gap-2">
          {PRESETS.map(v => (
            <button
              type="button"
              key={v}
              onClick={()=>setAmount(v)}
              className={`rounded-md px-3 py-2 border ${amount===v ? "bg-pink-600 text-white border-pink-600" : "border-gray-300"}`}
            >
              S/ {v}
            </button>
          ))}
          <input
            type="number"
            min={5}
            step={1}
            value={amount}
            onChange={(e)=>setAmount(parseInt(e.target.value || "0",10))}
            className="ml-2 w-28 rounded-md border border-gray-300 px-3 py-2"
            placeholder="Otro"
          />
        </div>
        <div className="mt-4 flex gap-3">
          <label className="inline-flex items-center gap-2">
            <input type="radio" name="freq" checked={freq==="once"} onChange={()=>setFreq("once")} />
            Única vez
          </label>
          <label className="inline-flex items-center gap-2">
            <input type="radio" name="freq" checked={freq==="monthly"} onChange={()=>setFreq("monthly")} />
            Mensual
          </label>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Email (para constancia)</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2"
          placeholder="tucorreo@ejemplo.com"
        />
        <button type="submit" className="btn btn-primary w-full mt-4">Continuar</button>
        <p className="text-xs text-gray-500 mt-2">
          Luego podrás pagar con tarjeta, Yape/Plin (si habilitado) o transferencias.
        </p>
      </div>
    </form>
  );
}
