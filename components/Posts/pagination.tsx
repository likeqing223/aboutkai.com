import { FC } from "react";
import styles from "./pagination.module.css";

interface PaginationProps {
  onClick?: VoidFunction;
}

const Pagination: FC<PaginationProps> = (props: PaginationProps) => {
  return (
    <div className="text-center text-primary-light dark:text-primary-dark">
      <button className={styles["load-more"]} onClick={props.onClick}></button>
    </div>
  );
};

export default Pagination;
