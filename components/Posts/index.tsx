import { isEqual, unionWith } from "lodash";
import React, { FC, useEffect, useMemo, useState } from "react";
import { usePagination } from "../../hooks";
import PostType from "../../types/post";
import HeroPost from "../heroPost";
import Pagination from "./pagination";
import Post from "./post";

export interface PostsProps {
  posts: PostType[];
}

const Posts: FC<PostsProps> = (props: PostsProps) => {
  const { posts } = props;
  const [start, end, setIndex] = usePagination();
  const [hasNextPage, setHasNextPage] = useState(true);
  const [displayPosts, setDisplayPosts] = useState<PostType[][]>([
    posts.slice(0, 5),
  ]);

  useEffect(() => {
    setHasNextPage(end < posts.length);
    setDisplayPosts((prev) =>
      unionWith(prev, [posts.slice(start, end)], isEqual)
    );
  }, [end, posts, start]);

  return (
    <div>
      {displayPosts.map((p, i) => (
        <div key={i}>
          <HeroPost post={p[0]} />
          <div className="grid lg:grid-cols-2 gap-16 my-16 md:grid-cols-1 px-16">
            {p.slice(1).map((post) => (
              <Post key={post.slug} post={post} />
            ))}
          </div>
        </div>
      ))}
      {hasNextPage && (
        <Pagination onClick={() => setIndex((prev) => prev + 1)} />
      )}
    </div>
  );
};

export default Posts;
