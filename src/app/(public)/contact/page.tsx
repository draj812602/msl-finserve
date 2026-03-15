import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <div className="container max-w-3xl px-4 py-12 md:py-16">
      <h1 className="text-3xl font-bold tracking-tight">Contact</h1>
      <p className="mt-2 text-muted-foreground">
        Fill out the form below and our team will reach out to you shortly.
      </p>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Get in touch</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground text-sm">
              Use the form to send your name, email, and message. We&apos;ll get back to
              you as soon as we can.
            </p>
            <div className="space-y-2 text-sm">
              <p>
                <span className="font-medium">Information</span>
              </p>
              <ul className="list-inside list-disc text-muted-foreground">
                <li>
                  <a href="/" className="hover:text-foreground">Home</a>
                </li>
                <li>
                  <a href="/about" className="hover:text-foreground">About</a>
                </li>
                <li>
                  <a href="/career" className="hover:text-foreground">Career</a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-foreground">Contact</a>
                </li>
              </ul>
            </div>
            <div className="space-y-2 text-sm">
              <p>
                <span className="font-medium">Products</span>
              </p>
              <ul className="list-inside list-disc text-muted-foreground">
                <li>
                  <a href="/services" className="hover:text-foreground">Home Loan</a>
                </li>
                <li>
                  <a href="/services" className="hover:text-foreground">Business Loan</a>
                </li>
                <li>
                  <a href="/services" className="hover:text-foreground">Vehicle Loan</a>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contact form</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Your message"
                  className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>
              <button
                type="submit"
                className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Submit
              </button>
            </form>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 rounded-lg border bg-muted/30 p-6">
        <p className="font-medium">Get in touch</p>
        <p className="mt-1 text-muted-foreground text-sm">
          Phone and email details can be added here.
        </p>
      </div>
    </div>
  );
}
