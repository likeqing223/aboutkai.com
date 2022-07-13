import { allBlogs } from '.contentlayer/generated';
import Bangumis from 'components/bilibili/Bangumis';
import Videos from 'components/bilibili/Videos';
import BlogPost from 'components/BlogPost';
import Container from 'components/Container';
import fetcher from 'lib/fetcher';
import { BilibiliBangumi, BilibiliVideo } from 'lib/types';
import { pick } from 'lib/utils';
import get from 'lodash.get';
import { InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Home({
  videos,
  bangumis,
  posts
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container>
      <div className="max-w-prose mx-auto pb-8 px-2">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <h1 className="font-medium text-4xl md:text-5xl tracking-tight mb-2">
              kaichi
            </h1>
            <p className="mb-4 text-gray-800 dark:text-gray-400">
              前端开发{' '}
              <a
                className="font-medium"
                target="_blank"
                rel="noopener noreferer"
                href="https://github.com/kaichii"
              >
                @kaichii
              </a>
            </p>
            <p className="text-gray-700 dark:text-gray-500">
              分享个人观点、新学到的知识以及一些编程经验。 Knowledge Growth in
              Sharing.
            </p>
          </div>
          <div className="w-[80px] sm:w-[160px] relative mb-4 sm:mb-0 mr-auto select-none">
            <Image
              alt="kaichi"
              height={160}
              width={160}
              src="/avatar.jpg"
              className="rounded-full filter"
              priority
            />
          </div>
        </div>
        <div className="flex items-center justify-between w-full mt-10 mb-2">
          <h3 className="text-xl md:text-2xl tracking-tight text-gray-800 dark:text-gray-200">
            最新文章
          </h3>
        </div>
        {posts.map((p) => (
          <BlogPost
            key={p.slug}
            slug={p.slug}
            title={p.title}
            description={p.description}
          />
        ))}
        <Link href="/blog">
          <a className="flex text-sm md:text-base items-center transition-all text-gray-700 dark:text-gray-500 mt-4">
            全部文章
            <svg className="h-4 w-4 md:h-6 md:w-6" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
              />
            </svg>
          </a>
        </Link>
        <div className="flex items-center justify-between w-full mt-8 mb-2">
          <h3 className="text-xl md:text-2xl tracking-tight text-gray-800 dark:text-gray-200">
            最新视频
          </h3>
        </div>
        <Videos videos={videos} />
        <Link href="/blog">
          <a className="flex text-sm md:text-base items-center transition-all text-gray-700 dark:text-gray-500 mt-6">
            哔哩哔哩
            <svg className="h-4 w-4 md:h-6 md:w-6" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
              />
            </svg>
          </a>
        </Link>
        <div className="flex items-center justify-between w-full mt-8 mb-6">
          <h3 className="text-xl md:text-2xl tracking-tight text-gray-800 dark:text-gray-200">
            最近在看（番剧）
          </h3>
        </div>
        <Bangumis bangumis={bangumis.slice(0, 4)} />
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const datas = await Promise.all([
    await fetcher(
      `${process.env.NEXT_PUBLIC_ENDPOINT}/api/bilibili/videos?userId=12951817`
    ),
    await fetcher(
      `${process.env.NEXT_PUBLIC_ENDPOINT}/api/bilibili/bangumi?userId=12951817`
    )
  ]);

  return {
    props: {
      videos: get(datas, [0, 'data'], []) as BilibiliVideo[],
      bangumis: get(datas, [1, 'data'], []) as BilibiliBangumi[],
      posts: allBlogs
        .map((post) =>
          pick(post, ['slug', 'title', 'description', 'publishedAt'])
        )
        .sort(
          (a, b) =>
            Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
        )
        .slice(0, 3)
    }
  };
}
