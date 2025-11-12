// components/StoryCard.tsx
export default function StoryCard({ title, excerpt }:{ title:string; excerpt:string; }) {
  return (
    <article className="card p-6">
      <h4 className="font-semibold">{title}</h4>
      <p className="text-gray-600 mt-2">{excerpt}</p>
      <button className="mt-3 text-pink-600">Leer historia →</button>
    </article>
  );
}
