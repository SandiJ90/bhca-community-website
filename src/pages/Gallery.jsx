import { galleryImages } from "../data/galleryData";

export default function Gallery() {
  return (
    <div>
      <section className="bg-[#5e17eb] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-2 text-sm font-bold backdrop-blur">
            Gallery
          </span>

          <h1 className="mb-6 text-5xl font-black md:text-6xl">
            Community moments
          </h1>

          <p className="max-w-3xl text-xl leading-relaxed text-white/80">
            Photos from local events, activities and community projects across
            Beeston Hill.
          </p>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="overflow-hidden rounded-[2rem] bg-[#faf8ff]"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-80 w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}