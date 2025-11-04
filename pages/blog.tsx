// pages/blog.tsx
import Head from "next/head";
import Link from "next/link";
import type { GetStaticProps } from "next";
import { getAllPosts, type Post } from "@/lib/blog";

const SITE = "https://papoomart.vercel.app";

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts();
  return { props: { posts } };
};

export default function BlogIndex({ posts }: { posts: Post[] }) {
  const canonical = `${SITE}/blog`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "PapoomArt — Blog",
    url: canonical,
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      datePublished: p.date,
      description: p.excerpt,
      url: `${SITE}/blog/${p.slug}`,
    })),
  };

  return (
    <>
      <Head>
        <title>Blog — PapoomArt</title>
        <meta
          name="description"
          content="Ideas, guías y materiales para tus stickers, etiquetas y detalles personalizados."
        />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content="Blog — PapoomArt" />
        <meta property="og:description" content="Ideas, guías y materiales para tus stickers, etiquetas y detalles personalizados." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      <main className="container mt-10">
        <header className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Blog</h1>
          <p className="text-gray-600 mt-2">
            Inspiración, consejos y mejores prácticas para personalizar tus detalles.
          </p>
        </header>

        <section className="grid md:grid-cols-2 gap-6 mt-8">
          {posts.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="card p-5 hover:shadow-lg transition">
              <span className="inline-block text-xs font-semibold text-pink-600 bg-pink-50 px-2 py-1 rounded">
                {p.tag}
              </span>
              <h2 className="text-xl font-semibold mt-2">{p.title}</h2>
              <p className="text-gray-600 mt-2">{p.excerpt}</p>
              <p className="text-gray-400 text-sm mt-3">
                {new Date(p.date).toLocaleDateString("es-PE", { year: "numeric", month: "long", day: "numeric" })}
              </p>
              <span className="mt-3 inline-block text-pink-600 font-semibold">Leer más →</span>
            </Link>
          ))}
        </section>
      </main>
    </>
  );
}
