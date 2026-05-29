import Button from "../ui/Button";

export default function FeaturedNews({ article }) {
  return (
    <article className="overflow-hidden rounded-[2rem] bg-white shadow-xl md:grid md:grid-cols-2">
      <div className="relative min-h-[340px]">
        <img
          src={article.image}
          alt={article.title}
          className="h-full w-full object-cover"
        />

        <div className="absolute left-5 top-5 rounded-full bg-[#5e17eb] px-4 py-2 text-xs font-black uppercase tracking-wide text-white">
          Featured story
        </div>
      </div>

      <div className="flex flex-col justify-center p-8 md:p-12">
        <div className="mb-4 text-sm font-bold text-[#ff914d]">
          {article.category} • {article.date}
        </div>

        <h2 className="mb-5 text-3xl font-black text-[#171717] md:text-4xl">
          {article.title}
        </h2>

        <p className="mb-8 text-lg leading-relaxed text-gray-600">
          {article.description}
        </p>

       <Button to={`/news/${article.slug}`} variant="primary">
  Read more
</Button>
      </div>
    </article>
  );
}