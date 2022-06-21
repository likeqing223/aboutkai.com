import Link from 'next/link';
import React, { PropsWithChildren } from 'react';

const ExternalLink = ({
  href,
  children
}: PropsWithChildren<{ href: string }>) => (
  <a
    className="text-gray-600 hover:text-gray-700 dark:hover:text-gray-400"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="w-full mx-auto max-w-xl">
      <hr className="border-1 border-gray-200 dark:border-gray-700 mb-8" />
      <div className=" grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link href="/">
            <a className="text-gray-600 hover:text-gray-700 dark:hover:text-gray-400">
              主页
            </a>
          </Link>
          <Link href="/blog">
            <a className="text-gray-600 hover:text-gray-700 dark:hover:text-gray-400">
              博客
            </a>
          </Link>
          <Link href="/guestbook">
            <a className="text-gray-600 hover:text-gray-700 dark:hover:text-gray-400">
              留言
            </a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://github.com/kaichii/aboutkai.com">
            GitHub
          </ExternalLink>
          <ExternalLink href="https://music.163.com/#/user/home?id=276894900">
            网易云
          </ExternalLink>
          <ExternalLink href="https://space.bilibili.com/12951817">
            哔哩哔哩
          </ExternalLink>
        </div>
        <div className="flex flex-col space-y-4">
          <Link href="/feed.xml">
            <a className="text-gray-600 hover:text-gray-700 dark:hover:text-gray-400">
              RSS
            </a>
          </Link>
          <Link href="/404">
            <a className="text-gray-600 hover:text-gray-700 dark:hover:text-gray-400">
              404
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
}
