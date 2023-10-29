import Image from "@/components/image";
import BlogCardHome from "@/components/blog-card-home";
import BlogPageLayout from "@/components/layout/blog-page-layout";
import { allSortedBlogs } from "@/lib/contentlayer";

const Page = () => {
  const blogs = [...allSortedBlogs];
  const recentBlogs = blogs.splice(0, 6);

  return (
    <main className="px-10 min-h-screen flex flex-col items-center justify-center text-center">
      <Image
        className=""
        src={"/images/header.png"}
        alt={"Grug listen music"}
        priority
        sizes="(min-width: 1200px) 100vw, 100vw"
      />
      <Image
        className=""
        src={"/images/Web Banner.png"}
        alt={"Grug cave home"}
        priority
        sizes="(min-width: 1200px) 100vw, 100vw"
      />

      <div className="px-5 py-10 text-center">
        Grug like music. Grug hope you music like also. <br />
        Grug write word on web place and you read! Grug also read but also make
        word. <br />
        Grug give think on thing like. Listen many music. Many music good. Many
        music okay. Many music never hear! <br />
        Here write about what hear and what like. If Grug like then write -
        easy! <br />
        Grug say &quot;Grug&quot; too much? No!? Wat? <br />
        <br />
        Grug happy to hear music. Send music here:{" "}
        <a href="mailto:gruglistenmusic@protonmail.com">
          gruglistenmusic@protonmail.com
        </a>
      </div>

      <BlogPageLayout title="Recent shrines">
        {recentBlogs.map((post) => (
          <BlogCardHome
            key={post.artist + " - " + post.album}
            artist={post.artist}
            album={post.album}
            date={post.date}
            img={post.image}
            href={`/shrine/${post.slug}`}
          />
        ))}
      </BlogPageLayout>
    </main>
  );
};

export default Page;
