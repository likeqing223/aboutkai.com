import Link from "next/link";
import React, { PropsWithChildren } from "react";

const ExternalLink = ({
  href,
  children
}: PropsWithChildren<{ href: string }>) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link href="/">
            <a className="text-gray-500 hover:text-gray-600 transition">主页</a>
          </Link>
          <Link href="/blog">
            <a className="text-gray-500 hover:text-gray-600 transition">博客</a>
          </Link>
          <Link href="/guestbook">
            <a className="text-gray-500 hover:text-gray-600 transition">
              留言板
            </a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://space.bilibili.com/12951817">
            B 站
          </ExternalLink>
          <ExternalLink href="https://github.com/kaichii">GitHub</ExternalLink>
          <ExternalLink href="https://music.163.com/#/user/home?id=276894900">
            网易云
          </ExternalLink>
        </div>
      </div>
    </footer>
  );
}
