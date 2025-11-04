// pages/blog/[slug].tsx
import Head from "next/head";
import Link from "next/link";
import type { GetStaticPaths, GetStaticProps } from "next";
import { getAllSlugs, getPostBySlug, type Post } from "@/lib/blog";

const SITE = "https://papoomart.vercel.app";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllSlugs().map((slug) => ({ params: { slug } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = String(params?.slug || "");
  const post = getPostBySlug(slug);
  if (!post) return { notFound: true };
  return { props: { post } };
};

export default function BlogPost({ post }: { post: Post }) {
  const canonical = `${SITE}/blog/${post.slug}`;

  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    datePublished: post.date,
    dateModified: post.date,
    description: post.excerpt,
    image: post.cover ? `${SITE}${post.cover}` : undefined,
    author: { "@type": "Organization", name: "PapoomArt", url: SITE },
    publisher: {
      "@type": "Organization",
      name: "PapoomArt",
      logo: { "@type": "ImageObject", url: `${SITE}/logo.png` },
    },
    mainEntityOfPage: canonical,
  };

  const jsonLdBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: canonical },
    ],
  };

  return (
    <>
      <Head>
        <title>{post.title} — PapoomArt</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={canonical} />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${post.title} — PapoomArt`} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={canonical} />
        {post.cover && <meta property="og:image" content={`${SITE}${post.cover}`} />}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${post.title} — PapoomArt`} />
        <meta name="twitter:description" content={post.excerpt} />
        {post.cover && <meta name="twitter:image" content={`${SITE}${post.cover}`} />}

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }} />
      </Head>

      <main className="container mt-10">
        <nav className="text-sm text-gray-500">
          <Link href="/" className="hover:underline">Inicio</Link> {" / "}
          <Link href="/blog" className="hover:underline">Blog</Link> {" / "}
          <span className="text-gray-700">{post.title}</span>
        </nav>

        <header className="mt-3 max-w-3xl">
          <span className="inline-block text-xs font-semibold text-pink-600 bg-pink-50 px-2 py-1 rounded">
            {post.tag}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mt-2">{post.title}</h1>
          <p className="mt-2 text-gray-500">
            Publicado el {new Date(post.date).toLocaleDateString("es-PE", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </header>

        {post.cover && (
          <div className="mt-6 rounded-xl overflow-hidden">
            <img src={post.cover} alt="" className="w-full h-auto" />
          </div>
        )}

        <article
          className="prose prose-pink max-w-3xl mt-8 prose-headings:scroll-mt-24"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="card p-6 md:p-10 text-center mt-12 max-w-3xl">
          <h3 className="text-xl font-semibold">¿Quieres aplicar estas ideas a tu fiesta?</h3>
          <p className="text-gray-600 mt-2">Te asesoramos y armamos tu pack perfecto en minutos.</p>
          <a
            href={`https://wa.me/51997374878?text=${encodeURIComponent(
              `Hola PapoomArt 👋, leí el post "${post.title}" y quiero cotizar etiquetas/detalles.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary mt-4 inline-block"
          >
            Pedir por WhatsApp
          </a>
        </div>

        <div className="mt-10 max-w-3xl flex items-center justify-between text-sm">
          <Link className="hover:underline" href="/blog">← Volver al blog</Link>
          <Link className="hover:underline" href="/catalogo">Ver catálogo →</Link>
        </div>
      </main>
    </>
  );
}
