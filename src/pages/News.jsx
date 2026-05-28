import Button from "../components/ui/Button";
import FeaturedNews from "../components/news/FeaturedNews";
import NewsCard from "../components/news/NewsCard";

import { news } from "../data/newsData";

const featuredArticle = news.find((article) => article.featured);
const latestNews = news.filter((article) => !article.featured);

export default function News() {
  return (
    <div>
      <section className="bg-[#5e17eb] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-2 text-sm font-bold backdrop-blur">
            News & updates
          </span>

          <h1 className="mb-6 text-5xl font-black md:text-6xl">
            Latest from BHCA
          </h1>

          <p className="max-w-3xl text-xl leading-relaxed text-white/80">
            Community news, project updates, event highlights and local stories
            from Beeston Hill.
          </p>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          {featuredArticle && <FeaturedNews article={featuredArticle} />}
        </div>
      </section>

      <section className="bg-[#faf8ff] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14">
            <span className="mb-4 inline-block rounded-full bg-white px-4 py-2 text-sm font-bold text-[#5e17eb] shadow-sm">
              Latest stories
            </span>

            <h2 className="text-4xl font-black text-[#171717]">
              Community updates
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {latestNews.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#5e17eb] py-20 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="mb-5 text-4xl font-black">
            Have a community update to share?
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
            Let us know about local news, activities or stories that residents
            may want to hear about.
          </p>

          <Button to="/contact" variant="orange">
            Contact us
          </Button>
        </div>
      </section>
    </div>
  );
}