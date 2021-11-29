import type { Blog } from ".contentlayer/types";
import Container from "components/Container";
import { format, parseISO } from "date-fns";
import Image from "next/image";
import React, { PropsWithChildren } from "react";

const editUrl = (slug: string) =>
  `https://github.com/kaichii/kaichii.github.io/edit/main/data/blog/${slug}.mdx`;

export default function BlogLayout({
  children,
  post
}: PropsWithChildren<{ post: Blog }>) {
  return (
    <Container
      title={`${post.title} - kaichi`}
      description={post.description}
      date={new Date(post.publishedAt).toISOString()}
      type="article"
    >
      <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-8">
        <h1 className="mb-6 text-2xl md:text-2xl font-bold tracking-tight text-black dark:text-white">
          {post.title}
        </h1>
        <div className="flex items-start justify-between w-full mb-4">
          <div className="flex items-center">
            <Image
              alt="kaichi"
              height={24}
              width={24}
              src="/avatar.jpeg"
              className="rounded-full"
            />
            <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              {"kaichi / "}
              {format(parseISO(post.publishedAt), "yyyy-MM-dd")}
            </p>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 min-w-32">
            {post.readingTime.text}
          </p>
        </div>
        <div className="w-full prose dark:prose-dark max-w-none mb-4">
          {children}
        </div>
        <a
          className="flex items-center text-sm text-gray-700 dark:text-gray-300"
          href={editUrl(post.slug)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            viewBox="0 0 1028 1024"
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
          >
            <path
              d="M1018.319924 112.117535q4.093748 9.210934 6.652341 21.492179t2.558593 25.585928-5.117186 26.609365-16.374994 25.585928q-12.281245 12.281245-22.003898 21.492179t-16.886712 16.374994q-8.187497 8.187497-15.351557 14.32812l-191.382739-191.382739q12.281245-11.257808 29.167958-27.121083t28.144521-25.074209q14.32812-11.257808 29.679676-15.863275t30.191395-4.093748 28.656239 4.605467 24.050772 9.210934q21.492179 11.257808 47.589826 39.402329t40.425766 58.847634zM221.062416 611.554845q6.140623-6.140623 28.656239-29.167958t56.289041-56.80076l74.710909-74.710909 82.898406-82.898406 220.038979-220.038979 191.382739 192.406177-220.038979 220.038979-81.874969 82.898406q-40.937484 39.914047-73.687472 73.175753t-54.242167 54.753885-25.585928 24.562491q-10.234371 9.210934-23.539054 19.445305t-27.632802 16.374994q-14.32812 7.16406-41.960921 17.398431t-57.824197 19.957024-57.312478 16.886712-40.425766 9.210934q-27.632802 3.070311-36.843736-8.187497t-5.117186-37.867173q2.046874-14.32812 9.722653-41.449203t16.374994-56.289041 16.886712-53.730448 13.304682-33.773425q6.140623-14.32812 13.816401-26.097646t22.003898-26.097646z"
              fill="currentColor"
            ></path>
          </svg>
          <span className="ml-1">在 Github 上编辑</span>
        </a>
      </article>
    </Container>
  );
}
