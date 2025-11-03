import Head from "next/head";
import Link from "next/link";

export default function EligeEtiquetas() {
  const phone = "51997374878";

  const items = [
    { title: "Rectangulares", size: "14x5 cm" },
    { title: "Cuadradas", size: "8.5x8.5 cm" },
    { title: "Circulares", size: "3.5 cm" },
    { title: "Mini stickers", size: "2x2 cm" },
    { title: "Etiquetas grandes", size: "8x8 cm" },
    { title: "Tags decorativos", size: "6x4 cm" },
    { title: "Tarjetitas de agradecimiento", size: "8x4 cm" },
    { title: "Mini rostros personalizados", size: "según foto" },
    { title: "Tarjetones de fiesta", size: "5x3 cm" },
  ];

  return (
    <>
      <Head>
        <title>Elige tus etiquetas | PapoomArt</title>
        <meta
          name="description"
          content="Elige tus stickers y etiquetas personalizadas — PapoomArt"
        />
      </Head>

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-teal-800 mb-6">🏷️ Elige tus etiquetas</h1>

        <p className="text-gray-600 mb-10">
          Selecciona el tipo de etiqueta ideal para tu evento, regalo o detalle ✨
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-6 border border-gray-100">
              <h2 className="font-semibold text-pink-600 mb-2">{item.title}</h2>
              <p className="text-sm text-gray-600 mb-2">Tamaño estándar: {item.size}</p>
              <p className="text-gray-500 text-sm mb-4">Material: Papel fotográfico adhesivo</p>

              <a
                href={`https://wa.me/${phone}?text=Hola%20PapoomArt!%20Quiero%20etiquetas%20${encodeURIComponent(
                  item.title
                )}`}
                target="_blank"
                className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-semibold px-5 py-2 rounded-lg transition"
              >
                Pedir por WhatsApp
              </a>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link href="/etiquetas/celebrar" className="text-teal-600 hover:underline">
            ← Volver
          </Link>
        </div>
      </main>
    </>
  );
}
