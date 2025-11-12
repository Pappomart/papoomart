// components/Footer.tsx
export default function Footer({ brandName }:{ brandName:string }) {
  return (
    <footer className="border-t bg-white mt-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-8 grid gap-8 md:grid-cols-3 text-sm text-gray-700">
        <div>
          <div className="font-semibold">{brandName}</div>
          <p className="mt-2 text-gray-600">
            Juntos llevamos ayuda a niños y familias en situación vulnerable.
          </p>
        </div>
        <div>
          <div className="font-semibold">Enlaces</div>
          <ul className="mt-2 space-y-2">
            <li><a href="/transparencia" className="hover:underline">Transparencia</a></li>
            <li><a href="/contacto" className="hover:underline">Contacto</a></li>
            <li><a href="/donar" className="hover:underline">Donar</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Legal</div>
          <p className="mt-2 text-gray-600">© {new Date().getFullYear()} {brandName}. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
