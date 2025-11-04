// lib/blog.ts
export type Post = {
  slug: string;
  title: string;
  tag: string;
  date: string;      // ISO 8601
  excerpt: string;
  cover?: string;
  content: string;   // HTML controlado por nosotros
};

// Fuente de posts (puedes reemplazar/añadir más)
export const POSTS: Post[] = [
  {
    slug: "como-elegir-etiquetas-perfectas",
    title: "Cómo elegir las etiquetas perfectas para tu fiesta 🎉",
    tag: "Guías",
    date: "2025-02-20",
    excerpt:
      "Tamaños, materiales y tips rápidos para que todo combine con tu temática.",
    cover: "/og.jpg",
    content: `
      <p>Elegir etiquetas puede parecer simple, pero <strong>hace toda la diferencia</strong> en la coherencia visual de tu fiesta.</p>
      <h2>1) Materiales</h2>
      <ul>
        <li><b>Vinil</b>: resistente al agua, ideal para botellas, loncheras y superficies expuestas.</li>
        <li><b>Papel fotográfico adhesivo</b>: gran color y nitidez para usos de interior.</li>
      </ul>
      <h2>2) Tamaños recomendados</h2>
      <ul>
        <li>Botellas: 14 x 5 cm</li>
        <li>Stickers multiusos: Ø 3.5 cm</li>
        <li>Etiquetas cuadradas para cajas: 8.5 x 8.5 cm</li>
      </ul>
      <p>¿Dudas? Te asesoramos por WhatsApp y armamos tu pack en minutos.</p>
    `,
  },
  {
    slug: "vinil-vs-papel-fotografico",
    title: "Vinil vs. papel fotográfico: ¿qué conviene y cuándo?",
    tag: "Materiales",
    date: "2025-02-18",
    excerpt:
      "Te contamos las diferencias para stickers resistentes y usos cotidianos.",
    cover: "/og.jpg",
    content: `
      <p>Ambos materiales lucen increíbles, pero cada uno tiene su <em>mejor escenario de uso</em>.</p>
      <h2>Vinil</h2>
      <ul>
        <li>Resistente a salpicaduras y humedad.</li>
        <li>Ideal para tomatodos, loncheras y recipientes.</li>
      </ul>
      <h2>Papel fotográfico adhesivo</h2>
      <ul>
        <li>Colores muy vivos y gran detalle.</li>
        <li>Perfecto para empaques, tarjetas y usos de interior.</li>
      </ul>
      <p>¿Aún no decides? Escríbenos y te ayudamos a elegir según tu caso.</p>
    `,
  },
  {
    slug: "ideas-para-detalles-personalizados",
    title: "7 ideas de detalles personalizados que siempre sorprenden",
    tag: "Inspírate",
    date: "2025-02-15",
    excerpt:
      "Pequeños detalles, gran impacto. Nuestra selección favorita para inspirarte.",
    cover: "/og.jpg",
    content: `
      <ol>
        <li>Stickers con nombre para vasos y tomatodos.</li>
        <li>Tarjetitas “Gracias por venir” con la temática del cumple.</li>
        <li>Mini rostros troquelados: un éxito con peques.</li>
        <li>Tags colgantes para cajas y bolsas.</li>
        <li>Etiquetas para frascos con dulces o frutos secos.</li>
        <li>Libretas y lapiceros personalizados.</li>
        <li>Boxes temáticos con todo coordinado.</li>
      </ol>
      <p>Tip: elige 2-3 colores base y repítelos en todo el set para un look profesional.</p>
    `,
  },
];

// Helpers
export function getAllPosts(): Post[] {
  return [...POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllSlugs(): string[] {
  return POSTS.map((p) => p.slug);
}

export function getPostBySlug(slug: string): Post | null {
  return POSTS.find((p) => p.slug === slug) ?? null;
}
