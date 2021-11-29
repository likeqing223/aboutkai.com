import cn from "classnames";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "styles/mobile-menu.module.css";
import useDelayedRender from "use-delayed-render";

export default function MobileMenu({
  menuItems
}: {
  menuItems: Array<{ href: string; text: string }>;
}) {
  const [open, setOpen] = useState(false);
  const { mounted, rendered } = useDelayedRender(open, {
    enterDelay: 20,
    exitDelay: 300
  });

  function toggleMenu() {
    setOpen((prev) => {
      if (prev) {
        document.body.style.overflow = "";
      } else {
        document.body.style.overflow = "hidden";
      }

      return !prev;
    });
  }

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      <button
        className={cn(styles.burger, "visible md:hidden")}
        aria-label="Toggle menu"
        type="button"
        onClick={toggleMenu}
      >
        <MenuIcon data-hide={open} />
        <CrossIcon data-hide={!open} />
      </button>
      {mounted && (
        <ul
          className={cn(
            styles.menu,
            "flex flex-col absolute bg-gray-100 dark:bg-gray-900",
            rendered && styles.menuRendered
          )}
        >
          {menuItems.map((m, i) => (
            <li
              key={i}
              className="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-medium"
              style={{ transitionDelay: `${150 + i * 25}ms` }}
            >
              <Link href={m.href}>
                <a className="flex w-auto pb-4">{m.text}</a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

function MenuIcon(props: JSX.IntrinsicElements["svg"]) {
  return (
    <svg
      className="h-6 w-6 absolute text-gray-900 dark:text-gray-100"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        d="M2.5 7.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 12.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossIcon(props: JSX.IntrinsicElements["svg"]) {
  return (
    <svg
      className="h-6 w-6 absolute text-gray-900 dark:text-gray-100"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      {...props}
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}
