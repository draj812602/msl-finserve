import Link from "next/link";

export function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-14 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            MSL Financial Services
          </Link>
          <nav className="hidden gap-4 md:flex">
            <Link
              href="/about"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              Products
            </Link>
            <Link
              href="/career"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              Career
            </Link>
            <Link
              href="/contact"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 py-6 md:flex-row md:py-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} MSL Financial Services. All rights reserved.
          </p>
          <nav className="flex gap-4">
            <Link href="/about" className="text-muted-foreground hover:text-foreground text-sm">
              About
            </Link>
            <Link href="/services" className="text-muted-foreground hover:text-foreground text-sm">
              Products
            </Link>
            <Link href="/career" className="text-muted-foreground hover:text-foreground text-sm">
              Career
            </Link>
            <Link href="/contact" className="text-muted-foreground hover:text-foreground text-sm">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
