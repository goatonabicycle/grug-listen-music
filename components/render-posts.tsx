import { BlogPost } from "@/.contentlayer/generated";
import BlogCard from "./blog-card";

const RenderPosts = ({ posts }: { posts: BlogPost[] }) => {
  return posts.map((post) => (
    <BlogCard
      key={post.artist + " - " + post.album}
      artist={post.artist}
      album={post.album}
      desc={post.description}
      tags={post.tags}
      date={post.date}
      img={post.image}
      href={`/blog/${post.slug}`}
    />
  ));
};

export default RenderPosts;
