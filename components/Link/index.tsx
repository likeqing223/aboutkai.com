import styles from "./link.module.css";
import cn from "classnames";

type LinkProps = {
  href: string;
  children: string;
};

const Link = ({ href, children }: LinkProps) => {
  return (
    <a
      href={href}
      className={cn(
        "text-primary-light dark:text-primary-dark",
        styles["global-underline"]
      )}
    >
      <span className="text-black dark:text-white">{children}</span>
    </a>
  );
};

export default Link;
