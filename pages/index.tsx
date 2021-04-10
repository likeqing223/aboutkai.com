import Head from "next/head";
import React from "react";
import Layout from "../components/Layout";
import Posts from "../components/Posts";
import { getAllPosts } from "../lib/api";
import Post from "../types/post";

type Props = {
  posts: Post[];
};

const Index = ({ posts }: Props) => {
  return (
    <Layout>
      <Head>
        <title>Home | Kai Chi</title>
      </Head>
      <Posts posts={posts} />
    </Layout>
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
