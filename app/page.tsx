import Image from "@/components/image";
import BlogCardHome from "@/components/blog-card-home";
import BlogPageLayout from "@/components/layout/blog-page-layout";
import { allSortedBlogs } from "@/lib/contentlayer";

const Page = () => {
  const blogs = [...allSortedBlogs];
  const recentBlogs = blogs.splice(0, 3);

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
      <div className="px-5 py-5 text-center">
        Grug like music. <br />
        Hope you music like also. <br />
        Here write word on web place and you read! <br />
        Grug give think on thing like. Listen many music. <br />
        Many music good. Many music okay. Many music never hear! <br />
        Here write about what hear and what like. If Grug like then write -
        easy! <br />
        Grug say &quot;Grug&quot; too much? No!? Wat? Grug give all music 5
        fires out of 5? Yes!
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
      <p className="px-5 py-10 text-center">
        <a href="/shrine" className="text-accent text-2xl font-bold">
          Look all shrine
        </a>
      </p>
    </main>
  );
};

export default Page;
