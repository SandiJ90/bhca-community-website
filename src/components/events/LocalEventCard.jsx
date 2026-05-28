export default function LocalEventCard({ event }) {
  return (
    <article className="rounded-3xl border border-gray-100 bg-[#faf8ff] p-6">
      <div className="mb-3 text-xs font-black uppercase tracking-wide text-[#ff914d]">
        Local listing
      </div>

      <h3 className="mb-3 text-2xl font-black text-[#171717]">
        {event.title}
      </h3>

      <p className="mb-5 leading-relaxed text-gray-600">
        {event.description}
      </p>

      <div className="text-sm font-bold text-[#5e17eb]">
        {event.date} • {event.location}
      </div>
    </article>
  );
}