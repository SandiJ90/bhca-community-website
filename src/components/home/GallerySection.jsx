import Button from "../ui/Button";
import { galleryImages } from "../../data/galleryData";

const featuredGalleryImages = galleryImages.filter((image) => image.featured);

export default function GallerySection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-[#faf8ff] px-4 py-2 text-sm font-bold text-[#5e17eb]">
            Community gallery
          </span>

          <h2 className="mb-4 text-4xl font-black text-[#171717] md:text-5xl">
            Community moments
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Celebrating local events, activities and the people helping shape
            Beeston Hill.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-4 md:grid-rows-2">
          {featuredGalleryImages.slice(0, 5).map((image, index) => (
            <div
              key={image.id}
              className={`overflow-hidden rounded-[2rem] ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button to="/gallery">View full gallery</Button>
        </div>
      </div>
    </section>
  );
}
