import { PropsWithChildren } from "react";

export default function MDWrapper(props: PropsWithChildren<{}>) {
  return (
    <div className="w-full prose prose-gray dark:prose-dark max-w-none">
      {props.children}
    </div>
  );
}
