import React, { FC, useEffect, useMemo, useState } from "react";
import { usePagination } from "../../hooks";
import PostType from "../../types/post";
import Pagination from "./pagination";
import Post from "./post";

export interface PostsProps {
  posts: PostType[];
}

const Posts: FC<PostsProps> = (props: PostsProps) => {
  const { posts } = props;
  const [start, end, setIndex] = usePagination(4);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [displayPosts, setDisplayPosts] = useState<PostType[][]>([]);

  useEffect(() => {
    setHasNextPage(end < posts.length);
    setDisplayPosts((prev) => [...prev, posts.slice(start, end)]);
  }, [end, posts, start]);

  return (
    <div>
      {displayPosts.map((p, i) => (
        <div
          key={i}
          className="grid lg:grid-cols-2 gap-16 mb-16 md:grid-cols-1"
        >
          {p.map((post) => (
            <Post key={post.slug} post={post} />
          ))}
        </div>
      ))}
      {hasNextPage && (
        <Pagination onClick={() => setIndex((prev) => prev + 1)} />
      )}
    </div>
  );
};

export default Posts;
