import { PropsWithChildren } from 'react';

export default function MDWrapper(props: PropsWithChildren<{}>) {
  return (
    <div className="w-full prose prose-gray dark:prose-invert max-w-none prose-blockquote:text-gray-600 prose-p:break-all prose-table:border-collapse prose-th:border prose-th:dark:border-gray-700 prose-td:border prose-td:dark:border-gray-700 prose-th:p-2 prose-td:p-2 prose-a:no-underline text-base">
      {props.children}
    </div>
  );
}
