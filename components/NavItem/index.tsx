import { useRouter } from "next/router";
import { FC } from "react";
import styles from "./nav-item.module.css";
import cn from "classnames";

interface NavItemProps {
  href: string;
  children: string;
}

const NavItem: FC<NavItemProps> = (props: NavItemProps) => {
  const { pathname } = useRouter();

  const check = Boolean(pathname === props.href);

  return (
    <a
      className={cn(
        styles["nav-item"],
        "text-primary-light dark:text-primary-dark",
        {
          [styles["active"]]: check,
        }
      )}
      href={props.href}
    >
      <span className="text-black dark:text-white">{props.children}</span>
    </a>
  );
};

export default NavItem;
