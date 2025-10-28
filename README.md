
# Tienda "Pekokis‑like" (Template original)

**⚠️ Importante:** Este proyecto NO clona ni reutiliza marca, imágenes o textos de https://pekokis.com. Es un template original inspirado en un sitio de regalos personalizados.

## Requisitos
- Node.js 18+
- Una cuenta en Vercel, Netlify o similar (recomendado Vercel)
- (Opcional) Cuenta de pasarela de pago (Culqi, Mercado Pago o PayPal)

## Instalar
```bash
npm install
npm run dev
```

## Desplegar en Vercel
1. Crea un repo en GitHub y sube el código.
2. Entra a https://vercel.com/new y conecta el repo.
3. Build command: `next build` · Output: `.next`
4. Deploy.

## Conectar pagos
- **Culqi**: crear una *orden* y tokenizar tarjeta desde el front, luego confirmar el cargo en el endpoint `/pages/api/checkout.ts`.
- **Mercado Pago**: usa *Preferences* para Checkout Pro y redirige a la aprobación.
- **PayPal**: integra *Checkout Buttons* y captura en el backend.

## Personalizar
- Cambia el nombre de marca en `pages/_app.tsx`.
- Edita catálogo en `data/products.json`.
- Sustituye imágenes por las de tus productos.
- Agrega políticas de envío/devolución y términos.

## Producción
- Configura un dominio en Vercel.
- Activa HTTPS, favicon, Google Analytics.
- Añade WhatsApp real en el botón de la home.
