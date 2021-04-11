import classnames from "classnames";
import { formatDistanceToNow, fromUnixTime } from "date-fns";
import React, { FC } from "react";
import Post from "../../types/post";
import Avatar from "../avatar";
import { Bilibili, Discord, Netease, Github } from "../Icons";
import Link from "../Link";
import styles from "./heroPost.module.css";

interface HeroPostProps {
  post: Post;
}

const HeroPost: FC<HeroPostProps> = (props: HeroPostProps) => {
  const { post } = props;
  return (
    <article className={classnames("mt-16 py-12 px-8", styles["post"])}>
      <div className={classnames("flex", styles["post-container"])}>
        <div className={styles["post-content"]}>
          <div className="-ml-1 mb-4">
            <Link className="text-6xl" href={`/post/${post.slug}`}>
              {post.title}
            </Link>
          </div>
          <div className="flex mb-4 text-base items-center">
            {formatDistanceToNow(fromUnixTime(post.date))} by {post.author}
            <Avatar name={post.author} />
          </div>
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
          {post.excerpt && <p className="pb-4 pt-2">{post.excerpt}</p>}
          {post.tags && (
            <div>
              {post.tags.map((t, i) => (
                <a key={i} href={`/tag/${t}`}>
                  <span className="font-mono text-base mt-4 mr-4 tracking-wider">
                    #{t}
                  </span>
                </a>
              ))}
            </div>
          )}
        </div>
        {post.coverImage && (
          <a className={styles["post-image"]} href={`/post/${post.slug}`}>
            <img
              className="w-full h-full object-cover"
              sizes=""
              alt={post.title}
              src={post.coverImage}
            />
          </a>
        )}
      </div>
    </article>
  );
};

export default HeroPost;
