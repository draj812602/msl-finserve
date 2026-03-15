import Link from "next/link";

export default function CareerPage() {
  return (
    <div className="container max-w-3xl px-4 py-12 md:py-16">
      <h1 className="text-3xl font-bold tracking-tight">Career</h1>
      <p className="mt-4 text-muted-foreground">
        Join our team and be part of a company that values transparency, innovation, and
        customer delight. We are always looking for talented individuals who share our
        commitment to empowering financial futures.
      </p>
      <p className="mt-4 text-muted-foreground">
        Open positions and application details will be updated here. For general
        inquiries, please reach out through our contact page.
      </p>
      <Link
        href="/contact"
        className="mt-6 inline-flex text-sm font-medium text-primary underline-offset-4 hover:underline"
      >
        Contact us
      </Link>
    </div>
  );
}
