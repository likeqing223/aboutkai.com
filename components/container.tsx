import type { PropsWithChildren } from "react";
import Head from "next/head";
import React from "react";
import Footer from "./Footer";

type ContainerProps = PropsWithChildren<{
  customMeta?: Record<string, string>;
}>;

export default function Container(props: ContainerProps) {
  const { customMeta, children } = props;

  const meta = {
    title: "",
    description: "",
    image: "",
    type: "",
    ...customMeta
  };

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
      </Head>
      <main>
        {children}
        <Footer />
      </main>
    </div>
  );
}
