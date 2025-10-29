"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const FORM_ID = process.env.NEXT_PUBLIC_FORMSPREE_NEWSLETTER_ID || "";
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle"|"loading"|"ok"|"error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!FORM_ID) {
      setStatus("error");
      setMessage("Falta configurar el Form ID. Agrega NEXT_PUBLIC_FORMSPREE_NEWSLETTER_ID en .env.local");
      return;
    }
    if (!email) return;

    try {
      setStatus("loading");
      setMessage("");

      const resp = await fetch(`https://formspree.io/f/${FORM_ID}`, {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          origen: "Suscripción footer (web)",
          _subject: "Nueva suscripción al club — PapoomArt",
        }),
      });

      if (resp.ok) {
        setStatus("ok");
        setMessage("¡Listo! Te suscribiste al club. Revisa tu correo (y spam).");
        setEmail("");
      } else {
        setStatus("error");
        setMessage("No pudimos registrar tu correo. Intenta nuevamente.");
      }
    } catch {
      setStatus("error");
      setMessage("Hubo un problema de red. Intenta otra vez.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <div className="flex gap-2">
        <input
          type="email"
          name="email"
          required
          placeholder="Tu correo"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          className="flex-1 rounded-md border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-pink-400"
        />
        <button
          type="submit"
          disabled={status==="loading"}
          className="rounded-md bg-pink-500 text-white px-4 py-2 font-semibold hover:bg-pink-600 disabled:opacity-60"
        >
          {status==="loading" ? "Enviando…" : "¡Suscríbete!"}
        </button>
      </div>

      {message && (
        <p className={`text-sm ${status==="ok" ? "text-green-700" : "text-red-600"}`}>
          {message}
        </p>
      )}
    </form>
  );
}
