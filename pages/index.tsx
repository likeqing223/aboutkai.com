import Head from "next/head";
import React from "react";
import { getAllPosts } from "../lib/api";
import Post from "../types/post";

type Props = {
  posts: Post[];
};

const Index = ({ posts }: Props) => {
  return (
    <>
      <Head>
        <title>Home | Kai Chi</title>
      </Head>
      <h1>Hi! I'm kaichi.</h1>
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const posts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
    "tags",
  ]);

  return {
    props: { posts },
  };
};
