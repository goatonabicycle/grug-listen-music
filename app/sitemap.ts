import siteConfig from "@/lib/siteConfig";
import { allBlogPosts } from "contentlayer/generated";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogs = allBlogPosts.map((post) => ({
    url: `${siteConfig.url}/shrine/${post.slug}`,
    lastModified: post.lastmod ?? post.date,
  }));

  const routes = ["", "/pals", "/secret", "/shrine"].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
  }));

  return [...routes, ...blogs];
}
