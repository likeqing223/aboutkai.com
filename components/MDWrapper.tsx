import { PropsWithChildren } from "react";

export default function MDWrapper(props: PropsWithChildren<{}>) {
  return (
    <div className="w-full prose prose-gray dark:prose-invert max-w-none prose-blockquote:text-gray-600 prose-p:break-all prose-table:border-collapse prose-th:border prose-td:border prose-th:p-2 prose-td:p-2">
      {props.children}
    </div>
  );
}
