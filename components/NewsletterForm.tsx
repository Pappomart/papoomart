// components/NewsletterForm.tsx
import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e:React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/subscribe", {
        method:"POST",
        headers:{ "Content-Type":"application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        alert("¡Gracias por suscribirte!");
        setEmail("");
      } else {
        const t = await res.text().catch(()=> "");
        alert("No pudimos procesar tu suscripción.\n"+(t||""));
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit} className="grid grid-cols-[1fr,auto] gap-2">
      <input
        type="email"
        required
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        placeholder="Tu correo"
        className="rounded-md border border-gray-300 px-3 py-2"
      />
      <button type="submit" disabled={loading} className="btn btn-primary">{loading ? "Enviando…" : "Suscribirme"}</button>
    </form>
  );
}
