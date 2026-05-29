export default function LocalEventCard({ event }) {
  return (
    <article className="rounded-3xl border border-gray-100 bg-[#faf8ff] p-6 transition hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-3 inline-flex rounded-full bg-orange-100 px-3 py-1 text-xs font-black uppercase tracking-wide text-[#ff914d]">
        Community Event
      </div>

      <h3 className="mb-2 text-2xl font-black text-[#171717]">
        {event.title}
      </h3>

      {event.organiser && (
        <p className="mb-4 text-sm font-bold text-[#5e17eb]">
          Organised by {event.organiser}
        </p>
      )}

      <p className="mb-6 leading-relaxed text-gray-600">
        {event.description}
      </p>

      <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-gray-500">
        <span>{event.date}</span>
        <span>•</span>
        <span>{event.location}</span>
      </div>
    </article>
  );
}