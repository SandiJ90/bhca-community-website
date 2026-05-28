import Button from "../ui/Button";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-black">
      <div className="absolute inset-0">
        <img
          src="/images/hero.jpg"
          alt="Beeston Hill Community"
          className="h-full w-full object-cover object-center opacity-55"
        />
      </div>

      <div className="absolute inset-0 bg-black/30" />

      <div className="relative mx-auto flex min-h-[70vh] max-w-7xl items-center justify-center px-6 py-24 text-center">
        <div className="max-w-4xl text-white">
          <img
            src="/logos/TEXT_LOGO.png"
            alt="Beeston Hill Community Association"
            className="mx-auto mb-10 w-full max-w-lg"
          />

          <h1 className="mb-6 text-5xl font-black leading-tight md:text-7xl">
            Building a stronger community together
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-white/85 md:text-xl">
            Supporting residents, local activities, events and community-led
            projects across Beeston Hill.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button to="/events">Upcoming Events</Button>
            <Button href="https://forms.gle/HdPxKtQfXRHJ3AH17" variant="ghost">
              Volunteer With Us
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 right-4 z-20 text-xs text-white/80 md:text-sm">
        © 2025 Mark Stevenson – John Charles Approach, Leeds
      </div>
    </section>
  );
}
