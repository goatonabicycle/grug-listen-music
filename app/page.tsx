import BlogCardHome from "@/components/blog-card-home";
import BlogPageLayout from "@/components/layout/blog-page-layout";
import RenderPosts from "@/components/render-posts";
import { allSortedBlogs } from "@/lib/contentlayer";
import config from "@/lib/siteConfig";
import { cn } from "@/lib/utils";

const Page = () => {
  const blogs = [...allSortedBlogs];
  const recentBlogs = blogs.splice(0, 4);

  return (
    <div className="min-h-screen flex flex-col gap-4 justify-center items-center">
      <p className="text-2xl">Under construction!</p>
      <div className="px-10 text-center">
        An image of a hut, I guess?
        <br />
        Grug not serious review blog/site. Grug not know what Grug doing so no
        need angry.
        <br />
        Grug write about what Grug hear and what Grug like.
        <br />
        If Grug like Grug write
        <br />
        Grug say &quot;Grug&quot; too much? No!? Wat?
        <br />
        <br />
        Grug like music. Grug think you music like also. <br />
        Grug write word on web place and you read! Grug also read but grug also
        make word. <br />
        Grug give think on thing grug like. Grug listen many music. Many music
        good. Many music okay. Many music never hear! <br />
        <br />
        <br />
        Grug happy to hear music. Send music here:{" "}
        <a href="mailto:gruglistenmusic@protonmail.com">
          gruglistenmusic@protonmail.com
        </a>
      </div>

      <main className="px-10 min-h-screen flex flex-col items-center justify-center text-center">
        <BlogPageLayout title="Recent shrines">
          {recentBlogs.map((post) => (
            <BlogCardHome
              key={post.artist + " - " + post.album}
              artist={post.artist}
              album={post.album}
              date={post.date}
              img={post.image}
              href={`/blog/${post.slug}`}
            />
          ))}
        </BlogPageLayout>
      </main>
    </div>
  );
};

export default Page;
