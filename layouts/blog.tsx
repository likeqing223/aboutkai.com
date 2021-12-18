import type { Blog } from ".contentlayer/types";
import Container from "components/Container";
import { format, parseISO } from "date-fns";
import fetcher from "lib/fetcher";
import Image from "next/image";
import React, { PropsWithChildren, useEffect } from "react";
import useSWR from "swr";

const editUrl = (slug: string) =>
  `https://github.com/kaichii/kaichii.github.io/edit/main/data/blog/${slug}.mdx`;

export default function BlogLayout({
  children,
  post
}: PropsWithChildren<{ post: Blog }>) {
  const { data } = useSWR<{ total: string }>(
    `/api/views/${post.slug}`,
    fetcher
  );

  const views = new Number(data?.total) ?? 0;

  useEffect(() => {
    const registerView = () =>
      fetch(`/api/views/${post.slug}`, {
        method: "POST"
      });
    if (process.env.NODE_ENV === "production") {
      registerView();
    }
  }, [post.slug]);

  console.log(post.readingTime);

  return (
    <Container
      title={`${post.title} - kaichi`}
      description={post.description}
      date={new Date(post.publishedAt).toISOString()}
      type="article"
    >
      <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-8">
        <h1 className="mb-6 text-3xl md:text-4xl lg:text-4xl font-medium tracking-tight text-gray-800 dark:text-gray-200">
          {post.title}
        </h1>
        <div className="flex items-start justify-between w-full">
          <div className="flex items-center">
            <Image
              alt="kaichi"
              height={24}
              width={24}
              src="/avatar.jpeg"
              className="rounded-full"
            />
            <p className="text-sm text-gray-700 dark:text-gray-300 ml-1">
              {"kaichi / "}
              {format(parseISO(post.publishedAt), "yyyy-MM-dd")}
            </p>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 min-w-32">
            {`${Math.round(post.readingTime)} 分钟`} • {`${views} 阅读`}
          </p>
        </div>
        <div className="w-full prose dark:prose-dark max-w-none mb-4 xl:prose-xl">
          {children}
        </div>
        <a
          className="flex items-center text-sm text-gray-400 dark:text-gray-300 font-medium"
          href={editUrl(post.slug)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>在 Github 上编辑</span>
        </a>
      </article>
    </Container>
  );
}
