import BlogCard from "@/components/blog-card";
import BlogPageLayout from "@/components/layout/blog-page-layout";
import Link from "@/components/link";
import PostPaginator from "@/components/post-paginator";
import RenderPosts from "@/components/render-posts";
import { allSortedBlogs } from "@/lib/contentlayer";
import config from "@/lib/siteConfig";
import { cn, generateCommonMeta } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = generateCommonMeta({
  title: "Blog",
  description: "Latest blog posts",
  image: "/api/og",
});

const Page = () => {
  if (!allSortedBlogs.length)
    return (
      <main className="min-h-screen flex flex-col items-center justify-center text-center">
        <p className="text-2xl lg:text-3xl mb-4">No posts found!</p>
        <p>Nothing yet!</p>
      </main>
    );

  const blogs = [...allSortedBlogs];
  const recentBlogs = blogs.splice(0, 3);
  const latestPost = recentBlogs.shift();
  const allPostsCount = config.blog.postPerPage - 3;

  return (
    <main>
      <BlogPageLayout title="Recent shrines">
        {latestPost && (
          <BlogCard
            key={latestPost.artist + " - " + latestPost.album}
            artist={latestPost.artist}
            album={latestPost.album}
            desc={latestPost.description}
            tags={latestPost.tags}
            date={latestPost.date}
            img={latestPost.image}
            href={`/shrine/${latestPost.slug}`}
            priority
          />
        )}
        <RenderPosts posts={recentBlogs} />
      </BlogPageLayout>

      <hr className="border-borders my-8 lg:my-12" />

      {blogs.length > 0 && (
        <BlogPageLayout title="All Shrines">
          <PostPaginator posts={blogs} postPerPage={allPostsCount} page={1} />
        </BlogPageLayout>
      )}
    </main>
  );
};

export default Page;
