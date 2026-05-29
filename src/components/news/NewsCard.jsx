import Button from "../ui/Button";

export default function NewsCard({ article }) {
  return (
    <article className="overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      {article.image && (
        <img
          src={article.image}
          alt={article.title}
          className="h-56 w-full object-cover"
        />
      )}

      <div className="p-7">
        <div className="mb-4 text-sm font-bold text-[#ff914d]">
          {article.category} • {article.date}
        </div>

        <h3 className="mb-3 text-2xl font-black text-[#171717]">
          {article.title}
        </h3>

        <p className="mb-6 leading-relaxed text-gray-600">
          {article.description}
        </p>

        <Button to={`/news/${article.slug}`} variant="outline" className="px-5 py-3">
  Read more
</Button>
      </div>
    </article>
  );
}