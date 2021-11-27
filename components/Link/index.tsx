import styles from "./link.module.css";
import cn from "classnames";

type LinkProps = {
  href: string;
  children: string;
  className?: string;
};

const Link = ({ href, children, className }: LinkProps) => {
  return (
    <a
      href={href}
      className={cn(
        "text-primary-light dark:text-primary-dark font-bold",
        styles["global-underline"],
        className
      )}
    >
      <span className={cn("text-black dark:text-white")}>{children}</span>
    </a>
  );
};

export default Link;
