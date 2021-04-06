import React, { FC } from "react";
import PostType from "../../types/post";
import Pagination from "./pagination";

export interface PostsProps {
  posts: PostType[];
}

const Posts: FC<PostsProps> = (props: PostsProps) => {
  const { posts } = props;
  return (
    <div>
      {posts.length}
      <Pagination />
    </div>
  );
};

export default Posts;
