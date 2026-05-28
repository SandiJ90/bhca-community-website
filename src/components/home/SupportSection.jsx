import Button from "../ui/Button";

export default function SupportSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-[2rem] bg-[#faf8ff] p-8 shadow-sm md:flex md:items-center md:justify-between md:gap-10 md:p-12">
          <div className="max-w-3xl">
            <span className="mb-4 inline-block rounded-full bg-white px-4 py-2 text-sm font-bold text-[#5e17eb] shadow-sm">
              Support BHCA
            </span>

            <h2 className="mb-4 text-4xl font-black text-[#171717]">
              Help support community projects and local events
            </h2>

            <p className="text-lg leading-relaxed text-gray-600">
              Donations help BHCA support residents, organise activities and
              continue building a stronger community in Beeston Hill.
            </p>
          </div>

          <div className="mt-8 md:mt-0">
            <Button
              href="https://donorbox.org/embed/beeston-hill-community-association-838411?"
              variant="orange"
              className="shrink-0"
            >
              Donate today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}