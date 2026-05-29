import { useParams, Link } from "react-router-dom";
import { news } from "../data/newsData";
import Button from "../components/ui/Button";

export default function NewsArticle() {
  const { slug } = useParams();
  const article = news.find((item) => item.slug === slug);

  if (!article) {
    return (
      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="mb-4 text-4xl font-black text-[#171717]">
            Article not found
          </h1>

          <Button to="/news">Back to news</Button>
        </div>
      </section>
    );
  }

  return (
    <article>
      <section className="bg-[#5e17eb] py-24 text-white">
        <div className="mx-auto max-w-5xl px-6">
          <Link
            to="/news"
            className="mb-8 inline-block font-bold text-white/80 hover:text-[#ff914d]"
          >
            ← Back to news
          </Link>

          <div className="mb-4 text-sm font-bold text-[#ff914d]">
            {article.category} • {article.date}
          </div>

          <h1 className="max-w-4xl text-5xl font-black leading-tight md:text-6xl">
            {article.title}
          </h1>
        </div>
      </section>

      {article.image && (
        <section className="bg-white">
          <div className="mx-auto max-w-5xl px-6">
            <img
              src={article.image}
              alt={article.title}
              className="-mt-12 h-[420px] w-full rounded-[2rem] object-cover shadow-xl"
            />
          </div>
        </section>
      )}

      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="grid gap-6 text-lg leading-relaxed text-gray-700">
            {article.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-12">
            <Button to="/news" variant="outline">
              Back to news
            </Button>
          </div>
        </div>
      </section>
    </article>
  );
}