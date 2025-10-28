import Head from 'next/head';

export default function Sobre() {
  return (
    <>
      <Head>
        <title>Sobre nosotros | PapoomArt</title>
        <meta
          name="description"
          content="PapoomArt es una marca peruana de papelería creativa, stickers personalizados y cajas decorativas hechas con amor."
        />
      </Head>

      <main className="container mt-10 mb-20">
        <h1 className="text-3xl font-bold mb-4">Sobre nosotros</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          En <strong>PapoomArt</strong> creemos que los detalles hechos con amor son los que más se recuerdan.
          Creamos <strong>papeles creativos, stickers personalizados y cajas decorativas</strong> para darle vida a tus regalos y celebraciones.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Cada pieza está diseñada y elaborada artesanalmente en Lima, Perú, cuidando los acabados y combinando colores, texturas y emociones.
          Personalizamos cada creación con nombres, mensajes o temáticas especiales para que tus regalos sean únicos.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Cómo funciona</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>Elige tu producto favorito en el catálogo.</li>
          <li>Personalízalo con tu nombre o mensaje especial.</li>
          <li>Confirma tu pedido por WhatsApp o directamente en la web.</li>
          <li>Pagos seguros por <strong>Culqi, Mercado Pago o transferencia bancaria</strong>.</li>
          <li>Envíos a todo el Perú por <strong>Olva Courier</strong> o recojo en punto.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Nuestra promesa</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Diseñamos con el corazón para transformar lo cotidiano en algo especial.
          Nuestro objetivo es inspirar alegría y creatividad en cada regalo, sticker o caja que sale de nuestro taller.
        </p>

        <p className="text-sm text-gray-500 mt-8">
          <strong>Nota legal:</strong> PapoomArt es una marca registrada. Todos los diseños y contenidos son originales y no reproducen material de terceros.
        </p>
      </main>
    </>
  );
}

