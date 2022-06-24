import type { Blog } from '.contentlayer/types';
import Container from 'components/Container';
import MDWrapper from 'components/MDWrapper';
import { format, parseISO } from 'date-fns';
import fetcher from 'lib/fetcher';
import Image from 'next/image';
import React, { PropsWithChildren, useEffect } from 'react';
import useSWR from 'swr';

const editUrl = (slug: string) =>
  `https://github.com/kaichii/aboutkai.com/edit/main/data/blog/${slug}.mdx`;

export default function BlogLayout({
  children,
  post
}: PropsWithChildren<{ post: Blog }>) {
  const { data } = useSWR<{ total: string }>(
    `/api/views/${post.slug}`,
    fetcher
  );

  const views = isNaN(Number(data?.total)) ? 0 : Number(data?.total);

  useEffect(() => {
    const registerView = () =>
      fetch(`/api/views/${post.slug}`, {
        method: 'POST'
      });
    if (process.env.NODE_ENV === 'production') {
      registerView();
    }
  }, [post.slug]);

  return (
    <Container
      title={post.title}
      description={post.description}
      date={new Date(post.publishedAt).toISOString()}
      type="article"
      url={`https://aboutkai.com/blog/${post.slug}`}
    >
      <article className="max-w-prose mx-auto mb-8 px-2">
        <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-8">
          {post.title}
        </h1>
        <div className="flex items-center text-gray-600 mb-6 justify-between">
          <div className="items-center" style={{ display: 'inline-flex' }}>
            <Image
              alt="kaichi"
              height={24}
              width={24}
              src="/avatar.jpg"
              className="rounded-full"
            />
            <span className="text-sm font-medium" style={{ marginLeft: 8 }}>
              {'kaichi • '}
              {format(parseISO(post.publishedAt), 'yyyy-MM-dd')}
            </span>
          </div>
          <p className="text-sm min-w-32">
            {`${Math.round(post.readingTime)} 分钟`} • {`${views} 阅读`}
          </p>
        </div>
        <MDWrapper>{children}</MDWrapper>
        <a
          className="flex items-center text-gray-600 hover:text-gray-700 dark:hover:text-gray-400 font-medium mt-6"
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
