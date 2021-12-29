import Bangumis from 'components/bilibili/Bangumis';
import Videos from 'components/bilibili/Videos';
import BlogPost from 'components/BlogPost';
import Container from 'components/Container';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <Container title="主页 - kaichi">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto pb-8">
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
              src="/avatar.jpeg"
              className="rounded-full filter"
              priority
            />
          </div>
        </div>
        <div className="flex items-center justify-between w-full mt-10 mb-2">
          <h3 className="text-xl md:text-2xl tracking-tight text-gray-800 dark:text-gray-200">
            精选文章
          </h3>
        </div>
        <BlogPost
          slug="javascript-value-vs-reference"
          title="JavaScript 中的值和引用"
          description="理解 JavaScript 中的值和引用，以及在程序中如何传递。"
        />
        <BlogPost
          slug="add-post-views"
          title="记录博客文章浏览数量"
          description="使用 Severless 数据库 PlantScale 和 Prisma 实现文章浏览数量记录。"
        />
        <BlogPost
          slug="immer-with-react"
          title="Immer & 不可变数据结构"
          description="了解不可变数据结构以及 Immer 带来的便利。"
        />
        <Link href="/blog">
          <a className="flex text-sm md:text-base items-center transition-all text-gray-700 dark:text-gray-500 mt-4">
            全部文章
            <svg className="h-6 w-6" viewBox="0 0 24 24">
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
        <Videos />
        <Link href="/blog">
          <a className="flex text-sm md:text-base items-center transition-all text-gray-700 dark:text-gray-500 mt-6">
            B 站主页
            <svg className="h-6 w-6" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
              />
            </svg>
          </a>
        </Link>
        <div className="flex items-center justify-between w-full mt-8 mb-6">
          <h3 className="text-xl md:text-2xl tracking-tight text-gray-800 dark:text-gray-200">
            最近在看
          </h3>
        </div>
        <Bangumis />
      </div>
    </Container>
  );
}
