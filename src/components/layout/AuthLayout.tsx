import Link from "next/link";

export function AuthLayout({
  children,
  title,
  subtitle,
}: {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-muted/30 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <Link href="/" className="inline-block text-xl font-semibold">
            MSL Financial Services
          </Link>
          <h1 className="mt-6 text-2xl font-bold tracking-tight">{title}</h1>
          <p className="mt-2 text-muted-foreground text-sm">{subtitle}</p>
        </div>
        <div className="rounded-lg border bg-card p-6 shadow-sm">{children}</div>
      </div>
    </div>
  );
}
