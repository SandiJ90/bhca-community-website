import Button from "../ui/Button";

export default function NewsletterSection() {
  return (
    <section className="bg-[#faf8ff] py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <span className="mb-4 inline-block rounded-full bg-white px-4 py-2 text-sm font-bold text-[#5e17eb] shadow-sm">
          Stay connected
        </span>

        <h2 className="mb-6 text-4xl font-black leading-tight text-[#171717] md:text-5xl">
          Keep up with local news, events and updates
        </h2>

        <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-gray-600">
          Join our mailing list to hear about upcoming events, volunteering
          opportunities and important updates from BHCA.
        </p>

        <div className="rounded-[2rem] bg-white p-10 text-center shadow-xl">
          <h3 className="mb-4 text-3xl font-black text-[#171717]">
            Sign up for updates
          </h3>

          <p className="mx-auto mb-8 max-w-xl text-lg text-gray-600">
            Get updates about local events, volunteering opportunities and
            community news from BHCA.
          </p>

          <Button href="https://forms.gle/yYvJKdutoiwjJrdT9" variant="orange">
            Join the mailing list
          </Button>
        </div>

        <p className="mt-8 text-sm text-gray-500">
          We’ll only contact you with relevant community updates.
        </p>
      </div>
    </section>
  );
}