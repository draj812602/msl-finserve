import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="container flex flex-col items-center justify-center gap-8 px-4 py-24 md:py-32">
        <div className="mx-auto max-w-2xl space-y-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Empowering Your Financial Future
          </h1>
          <p className="text-muted-foreground text-lg">
            At MSL Financial Services, we&apos;re dedicated to being your trusted partner in
            navigating the complex world of finance. With diverse loan solutions and a
            client-first approach, we offer solutions that fit your unique needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Get in touch
          </Link>
        </div>
      </section>

      {/* About Us */}
      <section className="border-t bg-muted/30 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              About Us
            </h2>
            <p className="mt-4 text-muted-foreground">
              We prioritize a client-first approach, ensuring that each solution is
              tailored to your goals. With a commitment to transparency and excellence,
              we aim to be more than just a financial service provider; we strive to be a
              partner in your journey to success.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center text-sm font-medium text-primary underline-offset-4 hover:underline"
            >
              Discover more
            </Link>
          </div>
        </div>
      </section>

      {/* Our Core Promises */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
            Our Core Promises
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-muted-foreground">
            We know that financial needs are unique. We offer customized solutions
            designed to fit your specific goals and circumstances.
          </p>
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Simplicity", desc: "Clear, straightforward solutions that make processes easy and intuitive." },
              { title: "Customer Delight", desc: "Exceeding expectations so every interaction brings satisfaction." },
              { title: "Respect", desc: "Valuing every individual's contributions and fostering inclusivity." },
              { title: "Innovative", desc: "Driving progress through creativity and forward-thinking." },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-lg border bg-card p-6 text-center shadow-sm"
              >
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="border-t bg-muted/30 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
            Our Services
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-muted-foreground">
            Financial services and loan products for individuals and businesses.
          </p>
          <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Home Loan",
              "Loan Against Property",
              "Business Loan",
              "Vehicle Loan",
              "Personal Loan",
            ].map((name) => (
              <div
                key={name}
                className="rounded-lg border bg-card p-6 text-center shadow-sm transition-colors hover:bg-muted/50"
              >
                <span className="font-medium">{name}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/services"
              className="text-sm font-medium text-primary underline-offset-4 hover:underline"
            >
              View all products
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Why Choose Us?
            </h2>
            <p className="mt-4 text-lg font-medium text-muted-foreground">
              Tailored financial solutions for your unique needs
            </p>
            <ul className="mt-8 space-y-3 text-left text-muted-foreground sm:mx-auto sm:max-w-md">
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Wide range of loans: personal, home, business, and more.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Customized advice: solutions designed for your needs.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Transparent process: clear, honest, and straightforward.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="border-t bg-muted/30 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Got questions? We&apos;re here to help
            </h2>
            <p className="mt-2 text-muted-foreground">
              Fill out the form on our contact page and our team will reach out to you
              shortly.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex h-10 items-center justify-center rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
