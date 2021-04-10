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
    <div className="px-8">
      <Meta />
      <Header />
      <main className="max-w-screen-xl m-auto">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
