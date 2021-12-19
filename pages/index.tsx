import Bangumis from "components/bilibili/Bangumis";
import Videos from "components/bilibili/Videos";
import BlogPost from "components/BlogPost";
import Container from "components/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <Container title="主页 - kaichi">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto pb-8">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <h1 className="font-medium text-2xl md:text-4xl tracking-tight mb-2 ">
              kaichi
            </h1>
            <p className="mb-2">前端开发</p>
            <p className="">
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
        <div className="flex items-center justify-between w-full mt-12 mb-2">
          <h3 className="text-xl md:text-2xl tracking-light">精选文章</h3>
          <Link href="/blog">
            <a className="flex text-sm md:text-base items-center transition-all ">
              全部文章
              <svg className="h-6 w-6" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
                />
              </svg>
            </a>
          </Link>
        </div>
        <BlogPost
          slug="add-post-views"
          title="记录博客文章浏览数量"
          description="使用 Severless 数据库 PlantScale 和 Prisma 实现文章浏览数量记录。"
        />
        <BlogPost
          slug="flutter-widget-value-listenable-builder"
          title="Flutter Widget: ValueListenableBuilder"
          description="ValueListenableBuilder 组件用法。"
        />
        <BlogPost
          slug="typescript-union-type"
          title="TypeScript 辨别联合类型"
          description="TypeScript 联合类型的辨别方式及特性。"
        />
        <div className="flex items-center justify-between w-full mt-8 mb-2">
          <h3 className="text-xl md:text-2xl tracking-light">最新视频</h3>
          <Link href="/blog">
            <a className="flex text-sm md:text-base items-center transition-all">
              B 站主页
              <svg className="h-6 w-6" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
                />
              </svg>
            </a>
          </Link>
        </div>

        <Videos />
        <div className="flex items-center justify-between w-full mt-8 mb-6">
          <h3 className="text-xl md:text-2xl tracking-light">最近在看</h3>
        </div>
        <Bangumis />
      </div>
    </Container>
  );
}
