import Head from 'next/head';
import { useForm, ValidationError } from '@formspree/react';

export default function Reclamos() {
  // Toma el ID desde variable de entorno (recomendado) o ponlo directo.
  const FORM_ID = process.env.NEXT_PUBLIC_FORM_ID || 'xxxxxxxx';
  const [state, handleSubmit] = useForm(FORM_ID);

  return (
    <>
      <Head>
        <title>Libro de Reclamaciones — PapoomArt</title>
        <meta name="robots" content="noindex" />
      </Head>

      <main className="container py-10">
        <h1 className="text-3xl font-bold">Libro de Reclamaciones</h1>
        <p className="mt-2 text-gray-600">
          Conforme a la Ley N.º 29571 (Código de Protección y Defensa del Consumidor) ponemos a tu
          disposición este formulario para ingresar un <strong>reclamo</strong> o una <strong>queja</strong>.
        </p>

        {/* Mensajes de estado */}
        {state.succeeded && (
          <div className="mt-6 rounded-lg border border-green-200 bg-green-50 p-4 text-green-700">
            Tu reclamo/queja fue enviado correctamente. Te escribiremos al correo indicado.
          </div>
        )}
        {state.errors?.length ? (
          <div className="mt-6 rounded-lg border border-red-200 bg-red-50 p-4 text-red-700">
            No pudimos enviar tu solicitud. Intenta nuevamente o escríbenos por WhatsApp.
          </div>
        ) : null}

        <form onSubmit={handleSubmit} className="mt-8 grid gap-6 md:grid-cols-2 card p-6">
          {/* --- Tipo --- */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium">Tipo de solicitud</label>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="tipo"
                  value="Reclamo"
                  required
                  className="accent-pink-500"
                />
                <span>Reclamo (disconformidad sobre producto/servicio)</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="tipo" value="Queja" className="accent-pink-500" />
                <span>Queja (malestar sobre atención)</span>
              </label>
            </div>
          </div>

          {/* --- Datos del consumidor --- */}
          <div>
            <label className="block text-sm font-medium">Nombres y apellidos</label>
            <input name="nombre" required className="input" placeholder="Tu nombre" />
          </div>

          <div>
            <label className="block text-sm font-medium">Documento de identidad</label>
            <input name="documento" required className="input" placeholder="DNI / CE" />
          </div>

          <div>
            <label className="block text-sm font-medium">Correo electrónico</label>
            <input type="email" name="email" required className="input" placeholder="tucorreo@mail.com" />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          <div>
            <label className="block text-sm font-medium">Teléfono</label>
            <input name="telefono" className="input" placeholder="+51 9xx xxx xxx" />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium">Dirección</label>
            <input name="direccion" className="input" placeholder="Calle, número, distrito, provincia" />
          </div>

          {/* --- Datos de la compra/servicio --- */}
          <div>
            <label className="block text-sm font-medium">Fecha de compra/servicio</label>
            <input type="date" name="fecha" className="input" />
          </div>

          <div>
            <label className="block text-sm font-medium">Monto reclamado (S/)</label>
            <input type="number" step="0.01" name="monto" className="input" placeholder="0.00" />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium">Producto/servicio</label>
            <input name="producto" className="input" placeholder="Ej. Stickers resistentes al agua" />
          </div>

          {/* --- Detalle --- */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium">Detalle del reclamo/queja</label>
            <textarea
              name="detalle"
              required
              className="input min-h-[120px]"
              placeholder="Describe lo ocurrido"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium">Pedido del consumidor</label>
            <textarea
              name="pedido"
              required
              className="input min-h-[100px]"
              placeholder="¿Qué solución solicitas?"
            />
          </div>

          {/* honeypot anti-bots */}
          <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

          {/* metadatos */}
          <input type="hidden" name="_subject" value="Nuevo registro — Libro de Reclamaciones" />
          <input type="hidden" name="origen" value="PapoomArt — Web" />

          <div className="md:col-span-2 flex items-start gap-3 text-sm text-gray-600">
            <input type="checkbox" required className="mt-1 accent-pink-500" />
            <span>
              Declaro ser el titular del reclamo/queja y que la información consignada es veraz. Autorizo el
              uso de mis datos para gestionar mi solicitud.
            </span>
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={state.submitting}
              className="btn btn-primary disabled:opacity-60"
            >
              {state.submitting ? 'Enviando…' : 'Enviar reclamo/queja'}
            </button>
          </div>

          {/* Nota legal visible */}
          <div className="md:col-span-2 text-xs text-gray-500">
            <p>
              * El proveedor dará respuesta en un plazo no mayor a 15 días hábiles, pudiendo extenderse
              excepcionalmente conforme a la normativa aplicable.
            </p>
          </div>
        </form>
      </main>

      <style jsx global>{`
        .input {
          @apply w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-pink-400;
        }
        .card {
          @apply rounded-xl border border-gray-200 bg-white shadow-sm;
        }
        .btn {
          @apply inline-flex items-center justify-center rounded-md px-4 py-2 font-semibold;
        }
        .btn-primary {
          @apply bg-pink-600 text-white hover:opacity-90 transition;
        }
      `}</style>
    </>
  );
}
