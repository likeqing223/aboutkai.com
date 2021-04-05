import Head from "next/head";
import React from "react";
import Container from "../components/container";
import HeroPost from "../components/hero-post";
import Intro from "../components/Intro";
import Layout from "../components/Layout";
import { getAllPosts } from "../lib/api";
import Post from "../types/post";

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
  return (
    <Layout>
      <Head>
        <title>Home | Kai Chi</title>
      </Head>
    </Layout>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
