import Image from "@/components/image";
import Link from "@/components/link";
import MDXContent from "@/components/mdx/mdx-content";
import PostTag from "@/components/post-tag";
import ProseLayout from "@/components/prose-layout";
import ScrollButton from "@/components/scroll-button";
import TocDesktop, { TocMobile } from "@/components/toc";
import { allSortedBlogs } from "@/lib/contentlayer";
import {
  cn,
  formatDate,
  generateCommonMeta,
  isArrayNotEmpty,
  slugify,
} from "@/lib/utils";
import { Calendar, NavArrowLeft } from "iconoir-react";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const generateStaticParams = () => {
  return allSortedBlogs.map((post) => {
    return {
      slug: post.slug,
    };
  });
};

export const generateMetadata = ({
  params,
}: {
  params: { slug: string };
}): Metadata => {
  const post = allSortedBlogs.find((post) => post.slug === params.slug);
  if (!post) notFound();

  const { artist, album, description, date } = post;
  const imgParams = new URLSearchParams({
    title: artist + " - " + album,
    date: formatDate(date),
  });
  const image = post.image ?? `/api/og?${imgParams.toString()}`;
  return generateCommonMeta({
    title: artist + " - " + album,
    description,
    image,
  });
};

const Page = ({ params }: { params: { slug: string } }) => {
  const post = allSortedBlogs.find((post) => post.slug === params.slug);
  if (!post) notFound();

  return (
    <main
      className={cn(
        "my-10 lg:my-16 xl:my-20 [--_space:1.5rem] lg:[--_space:2rem]",
      )}>
      <Link
        href="/shrine"
        className={cn(
          "inline-flex gap-1 items-center text-accent text-sm",
          "-ml-1 mb-[--_space] font-medium",
          "hover:text-accent hover:no-underline",
          "lg:text-base lg:leading-none",
        )}>
        <NavArrowLeft />
        <span>Back</span>
      </Link>
      <div
        className={cn(
          "flex flex-col-reverse gap-8 pb-[--_space]",
          "border-b border-b-borders",
          "lg:flex-row",
        )}>
        {post.image && (
          <div className="lg:flex-5">
            <Image
              className="post-img shadow-md"
              src={post.image}
              alt={post.artist + " - " + post.album}
              priority
              sizes="(min-width: 1200px) 100vw, 100vw"
            />
          </div>
        )}
        <div className="lg:flex-7">
          <ProseLayout>
            <div
              className={cn(
                "not-prose text-foreground-secondary text-sm font-medium",
                "flex gap-6 flex-wrap mb-6 lg:mb-10",
                "[&_svg]:text-xs [&>*]:flex [&>*]:gap-2",
              )}>
              <time dateTime={post.date}>
                <Calendar />
                {formatDate(post.date, "full")}
              </time>
            </div>
            <h1 className="md:leading-tight">
              {post.artist}
              <br />
              {post.album}
            </h1>
            <p className="mt-0 lg:mt-0">{post.description}</p>
            {isArrayNotEmpty(post.tags) && (
              <div className={cn("flex gap-2 flex-wrap not-prose")}>
                {post.tags.map((tag) => (
                  <Link key={tag} href={`/blog/tags/${slugify(tag)}`}>
                    <PostTag>{tag}</PostTag>
                  </Link>
                ))}
              </div>
            )}
          </ProseLayout>
        </div>
      </div>
      <div
        className={cn(
          "mt-[--_space]",
          "xl:flex xl:flex-row-reverse xl:justify-between",
        )}>
        <ProseLayout
          className={cn(
            "max-xl:mx-auto",
            post.headings.length < 1 && "mx-auto",
          )}>
          <MDXContent code={post.body.code} />
        </ProseLayout>
        <ScrollButton />
      </div>
    </main>
  );
};

export default Page;
