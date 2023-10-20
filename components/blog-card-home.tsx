import { cn, formatDate } from "@/lib/utils";
import Link from "@/components/link";
import Image from "@/components/image";

type BlogCardHomeProps = {
  img?: string;
  date: Date | string;  
  artist: string;
  album: string;
  href: string;
  className?: string;  
};

const BlogCardHome = ({  
  artist,
  album,  
  date,
  img,
  href,
  className,  
}: BlogCardHomeProps) => {
  return (
    <article className={className}>
      {img && (
        <Link href={href}>
          <Image
            className="post-img mb-6 hover:post-img-zoom transition duration-500"
            src={img}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            alt={artist + " - " + album}  
            priority="false"      
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
      </div>
    </article>
  );
};

export default BlogCardHome;
