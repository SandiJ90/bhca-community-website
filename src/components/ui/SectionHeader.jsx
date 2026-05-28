export default function SectionHeader({
  label,
  title,
  text,
  align = "center",
  light = false,
}) {
  const isCenter = align === "center";

  return (
    <div className={`mb-16 ${isCenter ? "text-center" : "max-w-3xl"}`}>
      {label && (
        <span
          className={`mb-4 inline-block rounded-full px-4 py-2 text-sm font-bold ${
            light
              ? "bg-white/10 text-white"
              : "bg-[#faf8ff] text-[#5e17eb]"
          }`}
        >
          {label}
        </span>
      )}

      <h2
        className={`mb-4 text-4xl font-black leading-tight md:text-5xl ${
          light ? "text-white" : "text-[#171717]"
        }`}
      >
        {title}
      </h2>

      {text && (
        <p
          className={`text-lg leading-relaxed ${
            isCenter ? "mx-auto max-w-2xl" : ""
          } ${light ? "text-white/80" : "text-gray-600"}`}
        >
          {text}
        </p>
      )}
    </div>
  );
}