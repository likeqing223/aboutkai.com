import { PropsWithChildren, useEffect, useState } from "react";
import Head from "next/head";
import NavLink from "next/link";
import React from "react";
import Footer from "./Footer";
import { useRouter } from "next/dist/client/router";
import cn from "classnames";
import { useTheme } from "next-themes";
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
            : "text-gray-600 dark:text-gray-400",
          "hidden md:inline-block hover:bg-gray-200 dark:hover:bg-gray-800 transition-all rounded-md p-1 sm:py-2 sm:px-3"
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
    { href: "/about-site", text: "关于本站" }
  ];

  useEffect(() => setMounted(true), []);

  const meta = {
    title: "",
    description: "",
    image: "",
    type: "",
    ...customMeta
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <div className="flex flex-col justify-center px-8">
        <nav className="flex items-center justify-between w-full max-w-3xl pt-8 pb-8 mx-auto sm:pb-12 relative">
          <div className="ml-[-0.60rem]">
            <MobileMenu menuItems={menuItems} />
            {menuItems.map((m, i) => (
              <NavItem key={i} href={m.href} text={m.text} />
            ))}
          </div>
          <button
            aria-label="切换主题"
            type="button"
            className="w-9 h-9 bg-gray-200 rounded-md dark:bg-gray-600 flex items-center justify-center transition-all ring-gray-300 hover:ring-2"
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
          >
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-5 h-5 text-gray-800 dark:text-gray-200"
              >
                {resolvedTheme === "dark" ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                )}
              </svg>
            )}
          </button>
        </nav>
      </div>
      <main className="px-8 flex flex-col justify-center bg-gray-50 dark:bg-gray-900">
        {children}
        <Footer />
      </main>
    </div>
  );
}
