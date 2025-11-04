import Head from "next/head";
import Link from "next/link";

export default function PacksCelebrar() {
  const phone = "51997374878";

  return (
    <>
      <Head>
        <title>Packs de cumpleaños personalizados | PapoomArt</title>
        <meta
          name="description"
          content="Packs de etiquetas personalizadas para cumpleaños — PapoomArt"
        />
      </Head>

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-teal-800 mb-6">
          🎉 Packs de cumpleaños personalizados
        </h1>

        <p className="text-gray-600 mb-10">
          Ideal para decorar dulces, botellas y sorpresas con el nombre del
          cumpleañero ✨
        </p>

        {/* PACKS */}
        <div className="space-y-8">
          {/* Pack 1 */}
          <div className="bg-white rounded-xl shadow p-6 border border-gray-100">
            <h2 className="text-xl font-semibold text-pink-600 mb-4">
              Pack Básico — 98 etiquetas (S/ 22)
            </h2>

            <ul className="list-disc ml-6 space-y-1 text-gray-700 text-sm">
              <li>12 botellas (14x5 cm)</li>
              <li>12 sublimes (6.5x6.7 cm)</li>
              <li>12 paletas (6x6 cm)</li>
              <li>12 cua-cua (9x4 cm)</li>
              <li>20 besos de moza (3.5 cm)</li>
              <li>30 multiusos (3.5 cm)</li>
            </ul>

            <a
              href={`https://wa.me/${phone}?text=Hola%20PapoomArt!%20Quiero%20el%20Pack%20Básico%20de%2098%20etiquetas`}
              target="_blank"
              className="inline-block mt-4 bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-2 rounded-lg transition"
            >
              Pedir por WhatsApp
            </a>
          </div>

          {/* Pack 2 */}
          <div className="bg-white rounded-xl shadow p-6 border border-gray-100">
            <h2 className="text-xl font-semibold text-pink-600 mb-4">
              Pack Intermedio — 121 etiquetas (S/ 25)
            </h2>

            <ul className="list-disc ml-6 space-y-1 text-gray-700 text-sm">
              <li>12 botellas</li>
              <li>12 sublimes</li>
              <li>12 paletas</li>
              <li>12 cua-cua</li>
              <li>20 besos de moza</li>
              <li>35 multiusos</li>
              <li>18 cajitas de torta (8.5x8.5 cm)</li>
            </ul>

            <a
              href={`https://wa.me/${phone}?text=Hola%20PapoomArt!%20Quiero%20el%20Pack%20Intermedio%20de%20121%20etiquetas`}
              target="_blank"
              className="inline-block mt-4 bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-2 rounded-lg transition"
            >
              Pedir por WhatsApp
            </a>
          </div>

          {/* Pack 3 */}
          <div className="bg-white rounded-xl shadow p-6 border border-gray-100">
            <h2 className="text-xl font-semibold text-pink-600 mb-4">
              Pack Premium — 150 etiquetas (S/ 27)
            </h2>

            <ul className="list-disc ml-6 space-y-1 text-gray-700 text-sm">
              <li>Todo lo del Pack Intermedio</li>
              <li>15 tarjetitas “Gracias por venir”</li>
              <li>14 stickers redondos 5x5 cm</li>
            </ul>

            <a
              href={`https://wa.me/${phone}?text=Hola%20PapoomArt!%20Quiero%20el%20Pack%20Premium%20de%20150%20etiquetas`}
              target="_blank"
              className="inline-block mt-4 bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-2 rounded-lg transition"
            >
              Pedir por WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-10">
          <Link href="/" className="text-teal-600 hover:underline">
            ← Volver
          </Link>
        </div>
      </main>
    </>
  );
}
