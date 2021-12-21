import cn from "classnames";
import { useTheme } from "next-themes";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import NavLink from "next/link";
import React, { PropsWithChildren, useEffect, useState } from "react";
import Footer from "./Footer";
import MobileMenu from "./MobileMenu";

type ContainerProps = PropsWithChildren<{
  title?: string;
  description?: string;
  image?: string;
  type?: string;
  date?: string;
}>;

type NavItemProps = {
  href: string;
  text: string;
};

function NavItem({ href, text }: NavItemProps) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NavLink href={href}>
      <a
        className={cn(
          isActive
            ? "font-medium text-gray-800 dark:text-gray-200"
            : "text-gray-700 dark:text-gray-400",
          "hidden md:inline-block hover:bg-gray-200 dark:hover:bg-gray-800 transition-all rounded-md p-1 sm:py-2 sm:px-3 md:font-"
        )}
      >
        <span>{text}</span>
      </a>
    </NavLink>
  );
}

export default function Container(props: ContainerProps) {
  const { children, ...customMeta } = props;
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  const menuItems = [
    { href: "/", text: "主页" },
    { href: "/blog", text: "博客" },
    { href: "/guestbook", text: "留言板" }
  ];

  useEffect(() => setMounted(true), []);

  const meta = {
    title: "https://aboutkai.com",
    description:
      "分享个人观点、新学到的知识以及一些编程经验。 Knowledge Growth in Sharing.",
    ...customMeta
  };

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <div className="flex flex-col justify-center px-8">
        <nav className="flex items-center justify-between w-full max-w-2xl mx-auto relative pt-8 pb-8 md:pb-12">
          <a href="#skip" className="skip-nav">
            Skip to content
          </a>
          <div className="ml-[-0.60rem]">
            <MobileMenu menuItems={menuItems} />
            {menuItems.map((m, i) => (
              <NavItem key={i} href={m.href} text={m.text} />
            ))}
          </div>
          <button
            aria-label="切换主题"
            type="button"
            className="p-2 bg-gray-100 hover:ring-2 ring-gray-200 dark:ring-gray-600 rounded-md dark:bg-gray-700 flex items-center justify-center transition-all"
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
          >
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-gray-800 dark:text-gray-200"
              >
                {resolvedTheme === "dark" ? (
                  <path d="M12.727 3.722A.736.736 0 0011.996 3a.734.734 0 00-.723.722v1.742c0 .39.332.721.723.721a.736.736 0 00.731-.721V3.722zm3.376 3.16a.735.735 0 000 1.02.726.726 0 001.031 0l1.239-1.236a.73.73 0 000-1.028.73.73 0 00-1.015 0l-1.255 1.244zm-9.245 1.02a.724.724 0 001.022 0c.283-.265.283-.746.009-1.02l-1.24-1.244a.748.748 0 00-1.022 0 .743.743 0 00-.008 1.02l1.239 1.244zm5.138-.132c-2.32 0-4.24 1.916-4.24 4.23 0 2.314 1.92 4.239 4.24 4.239 2.311 0 4.232-1.925 4.232-4.239s-1.92-4.23-4.232-4.23zm8.272 4.952c.4 0 .732-.332.732-.722a.736.736 0 00-.732-.722h-1.737a.734.734 0 00-.724.722c0 .39.333.722.724.722h1.737zM3.723 11.278A.734.734 0 003 12c0 .39.333.722.723.722h1.738c.399 0 .732-.332.732-.722a.736.736 0 00-.732-.722H3.723zm13.403 4.828a.74.74 0 00-1.023 0 .735.735 0 000 1.02l1.255 1.244a.73.73 0 001.015-.008.72.72 0 000-1.02l-1.247-1.236zM5.619 17.334a.743.743 0 00-.008 1.02.75.75 0 001.03.008l1.24-1.236a.727.727 0 00.008-1.02.75.75 0 00-1.031 0l-1.24 1.228zm7.108 1.202a.736.736 0 00-.731-.721.734.734 0 00-.723.721v1.742c0 .39.332.722.723.722a.736.736 0 00.731-.722v-1.742z"></path>
                ) : (
                  <path d="M15.977 14.456c-3.839 0-6.294-2.393-6.294-6.217 0-.79.192-1.92.447-2.505a.9.9 0 00.078-.332A.401.401 0 009.79 5c-.078 0-.249.021-.405.078C6.76 6.122 5 8.93 5 11.888 5 16.035 8.179 19 12.337 19c3.058 0 5.705-1.842 6.585-4.142.064-.162.078-.332.078-.395a.437.437 0 00-.419-.438.98.98 0 00-.305.064 7.979 7.979 0 01-2.299.367z" />
                )}
              </svg>
            )}
          </button>
        </nav>
      </div>
      <main id="skip" className="px-8 flex flex-col justify-center">
        {children}
        <Footer />
      </main>
    </div>
  );
}
