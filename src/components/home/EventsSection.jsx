import Button from "../ui/Button";
import { events } from "../../data/eventsData";

const featuredEvent = events.find(
  (event) => event.featured && event.type === "BHCA"
);

const bhcaEvents = events.filter(
  (event) => event.type === "BHCA" && !event.featured
);

const localEvents = events.filter((event) => event.type === "Local");

export default function EventsSection() {
  return (
    <section className="bg-[#faf8ff] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#5e17eb] shadow-sm">
            Events & activities
          </span>

          <h2 className="mb-4 text-4xl font-black text-[#171717] md:text-5xl">
            What&apos;s happening in Beeston Hill
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            BHCA-led events first, plus other local activities we think
            residents may want to know about.
          </p>
        </div>

        {featuredEvent && (
          <div className="mb-10 overflow-hidden rounded-[2rem] bg-white shadow-xl md:grid md:grid-cols-2">
            <div className="relative min-h-[320px]">
              <img
                src={featuredEvent.image}
                alt={featuredEvent.title}
                className="h-full w-full object-cover"
              />

              <div className="absolute left-5 top-5 rounded-full bg-[#5e17eb] px-4 py-2 text-xs font-black uppercase tracking-wide text-white">
                Featured BHCA Event
              </div>
            </div>

            <div className="flex flex-col justify-center p-8 md:p-12">
              <div className="mb-4 text-sm font-bold text-[#ff914d]">
                {featuredEvent.date} • {featuredEvent.location}
              </div>

              <h3 className="mb-5 text-3xl font-black text-[#171717] md:text-4xl">
                {featuredEvent.title}
              </h3>

              <p className="mb-8 text-lg leading-relaxed text-gray-600">
                {featuredEvent.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <Button variant="orange" to="/events">
                  View all events
                </Button>

                <Button
                  href="https://forms.gle/HdPxKtQfXRHJ3AH17"
                  variant="outline"
                  className="px-6 py-3"
                >
                  Volunteer to help
                </Button>
              </div>
            </div>
          </div>
        )}

        <div className="mb-16 grid gap-8 md:grid-cols-2">
          {bhcaEvents.map((event) => (
            <div
              key={event.id}
              className="rounded-3xl border border-purple-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex items-center justify-between gap-4">
                <span className="rounded-full bg-[#5e17eb]/10 px-4 py-2 text-xs font-black uppercase tracking-wide text-[#5e17eb]">
                  BHCA Event
                </span>

                <span className="text-sm font-semibold text-gray-500">
                  {event.date}
                </span>
              </div>

              <h3 className="mb-3 text-2xl font-black text-[#171717]">
                {event.title}
              </h3>

              <p className="mb-5 leading-relaxed text-gray-600">
                {event.description}
              </p>

              <Button to="/events" variant="text">
                Find out more →
              </Button>
            </div>
          ))}
        </div>

        <div className="rounded-[2rem] bg-white p-8 shadow-sm">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="mb-3 inline-block rounded-full bg-orange-100 px-4 py-2 text-xs font-black uppercase tracking-wide text-[#ff914d]">
                Local events
              </span>

              <h3 className="text-3xl font-black text-[#171717]">
                Other things happening locally
              </h3>
            </div>

            <Button to="/events" variant="text">
              See more local events →
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {localEvents.map((event) => (
              <div
                key={event.id}
                className="rounded-2xl border border-gray-100 bg-[#faf8ff] p-5"
              >
                <div className="mb-2 text-xs font-bold uppercase tracking-wide text-[#ff914d]">
                  Local listing
                </div>

                <h4 className="mb-2 text-lg font-black text-[#171717]">
                  {event.title}
                </h4>

                <p className="mb-4 text-sm leading-relaxed text-gray-600">
                  {event.description}
                </p>

                <div className="text-sm font-semibold text-[#5e17eb]">
                  {event.date}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 text-center">
          <Button variant="orange" to="/events">
            View all events
          </Button>
        </div>
      </div>
    </section>
  );
}
