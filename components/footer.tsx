import config from "@/lib/siteConfig";
import { cn } from "@/lib/utils";
import { Mail, Instagram, Twitter } from "iconoir-react";
import Link from "./link";

const socialLinks = [
  { icon: Twitter, href: config.socials.twitter, title: "Twitter" },
  // { icon: Instagram, href: config.socials.instagram, title: "Instagram" },
  { icon: Mail, href: `mailto:${config.socials.email}`, title: "Email" },
];

const Footer = () => {
  return (
    <footer
      className={cn(
        "flex flex-col items-center gap-8 px-2 py-10 lg:py-12",
        "border-t border-borders text-foreground-secondary",
      )}>
      <div className="flex gap-4 justify-center">
        {socialLinks.map((link) => (
          <Link
            key={link.href}
            className="hover:text-accent"
            target="_blank"
            href={link.href}
            aria-label={link.title}>
            <link.icon />
          </Link>
        ))}
      </div>
      <div className="text-center">
        <p className="text-sm mt-2">
          © {new Date().getFullYear()}, Grug Listen Music. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
