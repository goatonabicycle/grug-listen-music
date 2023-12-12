import BlogPageLayout from "@/components/layout/blog-page-layout";
import PostPaginator from "@/components/post-paginator";
import { allSortedBlogs } from "@/lib/contentlayer";
import config from "@/lib/siteConfig";
import { generateCommonMeta } from "@/lib/utils";
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

  const shrines = [...allSortedBlogs];
  const allPostsCount = config.blog.postPerPage;

  return (
    <main>
      {shrines.length > 0 && (
        <BlogPageLayout title="All Shrines">
          <PostPaginator posts={shrines} postPerPage={allPostsCount} page={1} />
        </BlogPageLayout>
      )}
    </main>
  );
};

export default Page;
