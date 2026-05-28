import Button from "../components/ui/Button";
import { actionPlan } from "../data/actionPlanData";

const featuredPriority = actionPlan.find((item) => item.featured);
const otherPriorities = actionPlan.filter((item) => !item.featured);

export default function ActionPlan() {
  return (
    <div>
      <section className="bg-[#5e17eb] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-2 text-sm font-bold backdrop-blur">
            Community Action Plan
          </span>

          <h1 className="mb-6 text-5xl font-black md:text-6xl">
            Working together for long-term change
          </h1>

          <p className="max-w-3xl text-xl leading-relaxed text-white/80">
            Our priorities are shaped by local residents, community partners and
            the needs of Beeston Hill.
          </p>
        </div>
      </section>

      {featuredPriority && (
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="rounded-[2rem] bg-[#5e17eb] p-8 text-white shadow-xl md:p-12">
              <div className="mb-6 text-6xl font-black text-white/20">
                {featuredPriority.number}
              </div>

              <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-wide">
                Featured priority • {featuredPriority.status}
              </span>

              <h2 className="mb-5 text-3xl font-black md:text-4xl">
                {featuredPriority.title}
              </h2>

              <p className="max-w-3xl text-lg leading-relaxed text-white/80">
                {featuredPriority.description}
              </p>
            </div>
          </div>
        </section>
      )}

      <section className="bg-[#faf8ff] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14">
            <span className="mb-4 inline-block rounded-full bg-white px-4 py-2 text-sm font-bold text-[#5e17eb] shadow-sm">
              Local priorities
            </span>

            <h2 className="text-4xl font-black text-[#171717]">
              What we’re focusing on
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {otherPriorities.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-6 text-5xl font-black text-[#ff914d]/30">
                  {item.number}
                </div>

                <span className="mb-4 inline-block rounded-full bg-[#faf8ff] px-3 py-1 text-xs font-bold text-[#5e17eb]">
                  {item.status}
                </span>

                <h3 className="mb-4 text-2xl font-black text-[#171717]">
                  {item.title}
                </h3>

                <p className="leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="mb-5 text-4xl font-black text-[#171717]">
            Have your say on local priorities
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
            BHCA is community-led. Share your ideas, concerns or suggestions for
            improving Beeston Hill.
          </p>

          <Button to="/contact" variant="primary">
            Share your priorities
          </Button>
        </div>
      </section>
    </div>
  );
}