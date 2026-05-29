export default function PartnersSection() {
  const partners = [
    {
      name: "Postcode Lottery",
      logo: "/images/partners/PL.png",
    },
    {
      name: "Lottery Community Fund",
      logo: "/images/partners/lotto.png",
    },
    {
      name: "Neighbourhood match funding",
      logo: "/images/partners/NM.png",
    },
    {
      name: "St Lukes Cares",
      logo: "/images/partners/SLC.png",
      className: "max-h-40",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <span className="mb-4 inline-block rounded-full bg-[#faf8ff] px-4 py-2 text-sm font-bold text-[#5e17eb]">
            Partners & supporters
          </span>

          <h2 className="mb-5 text-4xl font-black text-[#171717]">
            Working together for Beeston Hill
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600">
            BHCA works alongside local organisations, partners and supporters to
            strengthen the community and create opportunities for residents.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex h-36 items-center justify-center rounded-3xl border border-gray-100 bg-[#faf8ff] p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className={`w-auto object-contain transition duration-300 hover:scale-105 ${
  partner.className || "max-h-20"
}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}