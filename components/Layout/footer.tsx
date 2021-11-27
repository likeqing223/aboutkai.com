import React, { FC } from "react";
import { Github, Bilibili, Discord, Netease } from "../Icons";
import Link from "../Link";

const Footer: FC = () => {
  return (
    <footer className="py-4 pb-12 pt-10 border-t border-dashed dark:border-primary">
      <div className="flex flex-wrap justify-between">
        <div>
          <div className="mb-4 inline-block">
            <a href="/">
              <img
                className="filter dark:invert"
                src="/assets/kaichi.webp"
              />
            </a>
          </div>
          <p className="text-sm font-mono">
            kai chi`s personal blog. made with{" "}
            <Link href="/uses">various tech</Link>.
          </p>
          <div className="flex py-4 space-x-6">
            <a
              href="https://github.com/kaichii"
              aria-label="link Github"
              className="hover:text-primary-light dark:hover:text-primary-dark"
            >
              <Github />
            </a>
            <a
              href="https://music.163.com/#/user/home?id=276894900"
              aria-label="link Netease"
              className="hover:text-primary-light dark:hover:text-primary-dark"
            >
              <Netease fontSize="22" />
            </a>
            <a
              href="https://space.bilibili.com/12951817"
              aria-label="link Bilibili"
              className="hover:text-primary-light dark:hover:text-primary-dark"
            >
              <Bilibili fontSize="22" />
            </a>
            <a
              href="https://discord.gg/CqsUMPZ3nd"
              aria-label="link Discord"
              className="hover:text-primary-light dark:hover:text-primary-dark"
            >
              <Discord fontSize="22" />
            </a>
          </div>
        </div>
        <div className="flex">
          <div style={{ width: "150px" }} className="mb-4">
            <ul>
              <li className="mb-4">
                <a href="/">Posts</a>
              </li>
              <li className="mb-4">
                <a href="/me">About me</a>
              </li>
              <li className="mb-4">
                <a href="/tags">Tags</a>
              </li>
              <li className="mb-4">
                <a href="/404">404</a>
              </li>
            </ul>
          </div>
          <div style={{ width: "150px" }} className="mb-4">
            <ul>
              <li className="mb-4">
                <a href="/">Posts</a>
              </li>
              <li className="mb-4">
                <a href="/me">About me</a>
              </li>
              <li className="mb-4">
                <a href="/tags">Tags</a>
              </li>
              <li className="mb-4">
                <a href="/404">404</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="font-medium text-sm font-mono">
        Copyright © 2021 Kai. All Right Reserved.
      </div>
    </footer>
  );
};

export default Footer;
