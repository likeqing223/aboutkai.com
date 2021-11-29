import Container from "components/Container";
import { PropsWithChildren } from "react";

export default function AboutSiteLayout({ children }: PropsWithChildren<{}>) {
  return (
    <Container
      title="Uses – Lee Robinson"
      description="Here's what tech I'm currently using for coding, videos, and music."
    >
      <article className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-8">
        <h1 className="mb-4 text-2xl md:text-2xl font-medium tracking-tight text-black dark:text-white">
          关于本站
        </h1>
        <p className="mb-6 text-gray-600 dark:text-gray-400">
          下面列举构建本站用到的软件、技术。
        </p>
        <div className="prose dark:prose-dark w-full">{children}</div>
      </article>
    </Container>
  );
}
