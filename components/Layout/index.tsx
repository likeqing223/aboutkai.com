import React, { FC } from "react";
import Footer from "./footer";
import Header from "./header";
import Meta from "../meta";

type LayoutProps = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout: FC<LayoutProps> = ({ preview, children }: LayoutProps) => {
  return (
    <div className="px-8 bg-white dark:bg-black dark:text-white">
      <Meta />
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
