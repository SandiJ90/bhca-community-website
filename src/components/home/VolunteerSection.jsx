import Button from "../ui/Button";

export default function VolunteerSection() {
  const waysToHelp = [
    "Help at community events",
    "Support local projects",
    "Share your skills",
    "Welcome residents",
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-[2rem] bg-[#faf8ff] shadow-sm md:grid md:grid-cols-2">
          {/* CONTENT */}
          <div className="flex flex-col justify-center p-8 md:p-12">
            <span className="mb-4 inline-block rounded-full bg-white px-4 py-2 text-sm font-bold text-[#5e17eb] shadow-sm">
              Volunteer with BHCA
            </span>

            <h2 className="mb-6 text-4xl font-black leading-tight text-[#171717] md:text-5xl">
              Small actions can make a big difference locally
            </h2>

            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              Whether you can help at an event, support a local project or share
              your skills, every contribution helps strengthen the community.
            </p>

            <div className="mb-10 grid gap-4 sm:grid-cols-2">
              {waysToHelp.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-white px-5 py-4 font-bold text-[#171717] shadow-sm"
                >
                  <span className="mr-2 text-[#ff914d]">✓</span>
                  {item}
                </div>
              ))}
            </div>

            <Button href="https://forms.gle/HdPxKtQfXRHJ3AH17">
              Volunteer with us
            </Button>
          </div>

          {/* IMAGE */}
          <div className="relative min-h-[360px]">
            <img
              src="/images/volunteer.jpg"
              alt="BHCA volunteers and residents"
              className="h-full w-full object-cover"
            />

            <div className="absolute bottom-6 left-6 right-6 rounded-3xl bg-[#ff914d] p-6 text-white shadow-xl">
              <p className="text-xl font-black">
                “Everyone has something valuable to offer.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}