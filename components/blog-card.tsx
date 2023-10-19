import { cn, formatDate, isArrayNotEmpty, slugify } from "@/lib/utils";
import PostTag from "./post-tag";
import Link from "@/components/link";
import Image from "@/components/image";

type BlogCardProps = {
  img?: string;
  date: Date | string;  
  artist: string;
  album: string;
  desc: string;
  tags?: string[];
  href: string;
  className?: string;
  priority?: boolean;
};

const BlogCard = ({  
  artist,
  album,
  desc,
  tags,
  date,
  img,
  href,
  className,
  priority = false,
}: BlogCardProps) => {
  return (
    <article className={className}>
      {img && (
        <Link href={href}>
          <Image
            className="post-img mb-6 opacity-80 hover:opacity-100"
            src={img}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            alt={artist + " - " + album}
            priority={priority}
          />
        </Link>
      )}
      <div>
        <p className={cn("text-accent text-sm font-medium mb-4")}>
          {formatDate(date)}
        </p>
        <h3
          className={cn(
            "font-medium text-xl md:text-2xl mb-2 hover:underline",
          )}>
          <Link href={href}>{artist} - {album}</Link>
        </h3>
        <p className={cn("text-foreground-secondary")}>{desc}</p>
        {isArrayNotEmpty(tags) && (
          <div className={cn("mt-4 flex gap-2 flex-wrap")}>
            {tags.map((tag) => (
              <Link key={tag} href={`/blog/tags/${slugify(tag)}`}>
                <PostTag>{tag}</PostTag>
              </Link>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

export default BlogCard;
