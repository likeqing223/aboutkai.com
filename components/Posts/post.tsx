import classNames from "classnames";
import { formatDistanceToNow, fromUnixTime } from "date-fns";
import getImageColors from "get-image-colors";
import React, { FC, useEffect, useState } from "react";
import PostType from "../../types/post";
import Link from "../Link";
import postImage from "./postImage.module.css";

interface PostProps {
  post: PostType;
}

const Post: FC<PostProps> = (props: PostProps) => {
  const { post } = props;
  const [imageColors, setImageColor] = useState<chroma.Color[]>([]);

  useEffect(() => {
    if (post.coverImage) {
      getImageColors(post.coverImage).then((res) => {
        setImageColor(res);
      });
    }
  }, [post.coverImage]);

  return (
    <article className="max-w-full">
      <div className="pl-5 py-2 lg:border-l border-dashed dark:border-primary">
        {post.coverImage && (
          <a
            href={`/post/${post.slug}`}
            style={{
              color:
                imageColors.length > 0 ? imageColors[0].hex() : "transparent",
            }}
            className={classNames(
              "relative float-right w-32 h-32 bg-transparent mb-4 ml-6 transition transition-colors",
              postImage["post-image"]
            )}
          >
            <img src={post.coverImage} alt={post.title} loading="lazy" />
          </a>
        )}
        <div
          style={{
            width: post.coverImage && "calc(93% - 128px)",
          }}
        >
          <Link className="text-2xl font-serif" href={`/post/${post.slug}`}>
            {post.title}
          </Link>
        </div>
        <p className="my-4 text-sm font-serif">
          {formatDistanceToNow(fromUnixTime(post.date))} by {post.author}
        </p>
        {post.excerpt && (
          <p className="py-2 max-w-md text-sm font-serif">{post.excerpt}</p>
        )}
        {post.tags && (
          <div>
            {post.tags.map((t, i) => (
              <a key={i} href={`/tag/${t}`}>
                <span className="font-mono text-sm mt-3 mr-2">#{t}</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

export default Post;
