import Link from "next/link";

export function Navigation() {
  return (
    <nav className="border-b border-bg-subtle bg-bg-subtle/80 backdrop-blur sticky top-0 z-50">
      <div className="max-w-[1600px] mx-auto flex h-20 items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="font-inter font-medium text-foreground hover-none"
          >
            Nekko Technologies
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/solutions"
            className="font-medium text-foreground hover:text-primary transition-colors"
          >
            Solutions
          </Link>
          <Link
            href="/services"
            className="font-medium text-foreground hover:text-primary transition-colors"
          >
            Services
          </Link>
          <Link
            href="/projects"
            className="font-medium text-foreground hover:text-primary transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/cloud"
            className="font-medium text-foreground hover:text-primary transition-colors"
          >
            Cloud
          </Link>
          <Link
            href="/about"
            className="font-medium text-foreground hover:text-primary transition-colors"
          >
            About
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/601125325206"
            className="flex items-center gap-2 text-primary hover underline"
          >
            Discuss Your Project
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;