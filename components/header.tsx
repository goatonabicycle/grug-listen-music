import Image from "@/components/image";
import config from "@/lib/siteConfig";
import Link from "@/components/link";
import { cn } from "@/lib/utils";
import ThemeProvider from "@/contexts/theme-provider";

const navLinks = [
  { text: "Cave", href: "/" },
  { text: "Shrines", href: "/shrine" },
  { text: "Pals", href: "/pals" },
];

const Header = () => {
  return (
    <ThemeProvider>
      <script
        async
        defer
        src="https://eu.umami.is/script.js"
        data-website-id="54b55c94-683b-48b5-92b3-3a67df36755b"></script>
      <div
        className={cn(
          "sticky top-0 z-10 backdrop-blur-[10px] bg-background/80 shadow-sm",
          "transition-colors",
        )}>
        <header className={cn("max-w-container-center flex items-center py-4")}>
          <Link
            href="/"
            className={cn(
              "flex items-center text-lg font-bold mr-auto lg:text-xl flex-wrap",
            )}>
            <span className="flex items-center">
              <Image
                className="inline-block mr-1"
                src={"/images/Axe.png"}
                alt={"Grug cave home"}
                priority
                sizes="(min-width: 1200px) 100vw, 100vw"
                style={{ height: "2em", width: "auto" }}
              />
              {config.title}
            </span>
          </Link>
          <nav>
            <ul className={cn("flex items-center gap-4 md:gap-6 lg:gap-8")}>
              {navLinks.map((link) => (
                <li key={link.text}>
                  <Link
                    href={link.href}
                    className="lg:text-lg lg:font-medium hover:text-accent">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
      </div>
    </ThemeProvider>
  );
};

export default Header;
