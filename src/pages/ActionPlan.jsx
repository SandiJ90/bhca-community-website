import Button from "../components/ui/Button";
import { actionPlan } from "../data/actionPlanData";

const featuredPriority = actionPlan.find((item) => item.featured);
const otherPriorities = actionPlan.filter((item) => !item.featured);

function StatusBadge({ status }) {
  return (
    <span className="inline-block rounded-full bg-[#faf8ff] px-3 py-1 text-xs font-bold text-[#5e17eb]">
      {status}
    </span>
  );
}

export default function ActionPlan() {
  return (
    <div>
      <section className="bg-[#5e17eb] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-2 text-sm font-bold backdrop-blur">
            Community Action Plan
          </span>

          <h1 className="mb-6 text-5xl font-black md:text-6xl">
            Turning resident concerns into action
          </h1>

          <p className="max-w-3xl text-xl leading-relaxed text-white/80">
            Our Community Action Plan was created from resident feedback and
            sets clear targets for local services, the council and police.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl bg-[#faf8ff] p-8">
              <div className="mb-2 text-4xl font-black text-[#ff914d]">
                7,700
              </div>
              <p className="font-bold text-[#171717]">
                Residents represented
              </p>
            </div>

            <div className="rounded-3xl bg-[#faf8ff] p-8">
              <div className="mb-2 text-4xl font-black text-[#ff914d]">
                2,600
              </div>
              <p className="font-bold text-[#171717]">
                Households represented
              </p>
            </div>

            <div className="rounded-3xl bg-[#faf8ff] p-8">
              <div className="mb-2 text-4xl font-black text-[#ff914d]">
                6
              </div>
              <p className="font-bold text-[#171717]">
                Resident-led targets
              </p>
            </div>
          </div>
        </div>
      </section>

      {featuredPriority && (
        <section className="bg-[#faf8ff] py-24">
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

              <p className="mb-6 max-w-3xl text-lg leading-relaxed text-white/80">
                {featuredPriority.description}
              </p>

              <p className="font-bold text-[#ff914d]">
                Target: {featuredPriority.target}
              </p>
            </div>
          </div>
        </section>
      )}

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14">
            <span className="mb-4 inline-block rounded-full bg-[#faf8ff] px-4 py-2 text-sm font-bold text-[#5e17eb]">
              Our priorities
            </span>

            <h2 className="mb-4 text-4xl font-black text-[#171717]">
              What we’re asking for
            </h2>

            <p className="max-w-3xl text-lg leading-relaxed text-gray-600">
              These priorities are based on issues raised by residents at
              community meetings and through local feedback.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {otherPriorities.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl border border-purple-100 bg-[#faf8ff] p-8 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-6 text-5xl font-black text-[#ff914d]/30">
                  {item.number}
                </div>

                <div className="mb-4">
                  <StatusBadge status={item.status} />
                </div>

                <h3 className="mb-4 text-2xl font-black text-[#171717]">
                  {item.title}
                </h3>

                <p className="mb-6 leading-relaxed text-gray-600">
                  {item.description}
                </p>

                <p className="text-sm font-bold text-[#5e17eb]">
                  Target: {item.target}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#faf8ff] py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-center">
          <div>
            <span className="mb-4 inline-block rounded-full bg-white px-4 py-2 text-sm font-bold text-[#5e17eb] shadow-sm">
              Who we represent
            </span>

            <h2 className="mb-6 text-4xl font-black text-[#171717]">
              A community voice for Beeston Hill
            </h2>

            <p className="mb-6 text-lg leading-relaxed text-gray-600">
              BHCA represents residents across the Beeston Hill area defined in
              the Action Plan appendix. The plan estimates this area includes
              around 7,700 residents and 2,600 households.
            </p>

            <p className="text-lg leading-relaxed text-gray-600">
              Progress against these targets will be kept under review and
              reported back to residents at regular community meetings.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-6 shadow-sm">
            <img
              src="/images/action-plan/appendix-map.png"
              alt="Map showing the BHCA area covered by the Community Action Plan"
              className="w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <div className="rounded-[2rem] bg-[#faf8ff] p-8 shadow-sm md:p-12">
            <h2 className="mb-5 text-4xl font-black text-[#171717]">
              Have your say
            </h2>

            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
              The Action Plan is community-led. Share your ideas, concerns or
              suggestions for improving Beeston Hill.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button to="/contact" variant="primary">
                Share your priorities
              </Button>

              <Button
                href="/documents/BHCA_Comunity_Action_Plan_Sept_2025.pdf"
                variant="outline"
              >
                Download full plan
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}