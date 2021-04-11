import classnames from "classnames";
import { formatDistanceToNow, fromUnixTime } from "date-fns";
import React, { FC } from "react";
import Post from "../../types/post";
import Link from "../Link";
import styles from "./heroPost.module.css";

interface HeroPostProps {
  post: Post;
}

const HeroPost: FC<HeroPostProps> = (props: HeroPostProps) => {
  const { post } = props;
  return (
    <article className={classnames("mt-16 py-12 px-8", styles["post"])}>
      <div
        className={classnames("flex", styles["post-container"], {
          [styles["is-image"]]: !!post.coverImage,
        })}
      >
        <div className={styles["post-content"]}>
          <div className="mb-4 text-base">
            {formatDistanceToNow(fromUnixTime(post.date))} by {post.author}
          </div>
          <div className="-ml-1 mb-4">
            <Link className="text-6xl" href={`/post/${post.slug}`}>
              {post.title}
            </Link>
          </div>
          {post.excerpt && <p className="pb-4 pt-2">{post.excerpt}</p>}
          {post.tags && (
            <div>
              {post.tags.map((t, i) => (
                <a key={i} href={`/tag/${t}`}>
                  <span className="font-mono text-base mt-4 mr-4 tracking-wider">#{t}</span>
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
