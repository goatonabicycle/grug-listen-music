import config from "@/lib/siteConfig";
import { cn } from "@/lib/utils";
import { Mail, Instagram, Twitter, Facebook } from "iconoir-react";
import Link from "./link";
import Image from "@/components/image";

const socialLinks = [
  { icon: Twitter, href: config.socials.twitter, title: "Twitter" },
  { icon: Facebook, href: config.socials.facebook, title: "Facebook" },
  { icon: Instagram, href: config.socials.instagram, title: "Instagram" },
  { icon: Mail, href: `mailto:${config.socials.email}`, title: "Email" },
];

const Footer = () => {
  return (
    <footer
      className={cn(
        "flex flex-col items-center gap-8 px-2 py-10 lg:py-12",
        "border-t border-borders text-foreground-secondary",
      )}>
      Send Grug music
      <div className="flex gap-4 justify-center">
        {/* This silly package doesn't have the bsky logo. */}
        <a
          href="https://bsky.app/profile/gruglistenmusic.bsky.social"
          target="_blank">
          
          <Image
                className="inline-block mr-1"
                src={"/images/32px-Bluesky_Logo.svg.png"}
                 alt="Bluesky Logo"
                priority
                sizes="(min-width: 100px) 80vw, 80vw"
                style={{ height: "1.5em", width: "auto" }}
              />          
        </a>
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
