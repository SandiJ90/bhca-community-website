import FeaturedEvent from "../components/events/FeaturedEvent";
import EventCard from "../components/events/EventCard";
import LocalEventCard from "../components/events/LocalEventCard";
import Button from "../components/ui/Button";
import { events } from "../data/eventsData";

const featuredEvent = events.find(
  (event) => event.featured && event.type === "BHCA"
);

const bhcaEvents = events.filter(
  (event) => event.type === "BHCA" && !event.featured
);

const localEvents = events.filter(
  (event) => event.type === "Local"
);

export default function Events() {
  return (
    <div>
      {/* HERO */}
      <section className="bg-[#5e17eb] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-2 text-sm font-bold backdrop-blur">
            Events & activities
          </span>

          <h1 className="mb-6 text-5xl font-black md:text-6xl">
            Community events and local activities
          </h1>

          <p className="max-w-3xl text-xl leading-relaxed text-white/80">
            Discover BHCA events, local activities and opportunities to get
            involved across Beeston Hill.
          </p>
        </div>
      </section>

      {/* FEATURED EVENT */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          {featuredEvent && (
            <FeaturedEvent event={featuredEvent} />
          )}
        </div>
      </section>

      {/* BHCA EVENTS */}
      <section className="bg-[#faf8ff] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14">
            <span className="mb-4 inline-block rounded-full bg-white px-4 py-2 text-sm font-bold text-[#5e17eb] shadow-sm">
              BHCA events
            </span>

            <h2 className="text-4xl font-black text-[#171717]">
              Upcoming BHCA events
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {bhcaEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL EVENTS */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14">
            <span className="mb-4 inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-bold text-[#ff914d]">
              Local activities
            </span>

            <h2 className="text-4xl font-black text-[#171717]">
              Other local events
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {localEvents.map((event) => (
              <LocalEventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#5e17eb] py-20 text-white">
  <div className="mx-auto max-w-5xl px-6 text-center">
    <h2 className="mb-5 text-4xl font-black">
      Want to help at a BHCA event?
    </h2>

    <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
      We’re always looking for local volunteers to help with events, activities
      and community projects.
    </p>

    <Button href="https://forms.gle/HdPxKtQfXRHJ3AH17" variant="orange">
      Volunteer with us
    </Button>
  </div>
</section>
    </div>
  );
}