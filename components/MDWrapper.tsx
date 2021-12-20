import { PropsWithChildren } from "react";

export default function MDWrapper(props: PropsWithChildren<{}>) {
  return (
    <div className="w-full prose dark:prose-invert max-w-none">
      {props.children}
    </div>
  );
}
