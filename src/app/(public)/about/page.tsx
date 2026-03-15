import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="container max-w-3xl px-4 py-12 md:py-16">
      <h1 className="text-3xl font-bold tracking-tight">About</h1>
      <p className="mt-4 text-muted-foreground">
        MSL Financial Services is your trusted partner in finance. We combine experience
        with innovation to offer solutions that fit your unique needs.
      </p>

      <div className="mt-12 space-y-12">
        <section>
          <h2 className="text-xl font-semibold">Company Profile</h2>
          <p className="mt-2 text-muted-foreground">
            Our company profile and history. We prioritize transparency, excellence,
            and a client-first approach in everything we do.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Management</h2>
          <p className="mt-2 text-muted-foreground">
            Our leadership team brings together experience and vision to guide our
            mission of empowering your financial future.
          </p>
        </section>
      </div>

      <div className="mt-12">
        <Link
          href="/contact"
          className="text-sm font-medium text-primary underline-offset-4 hover:underline"
        >
          Get in touch
        </Link>
      </div>
    </div>
  );
}
