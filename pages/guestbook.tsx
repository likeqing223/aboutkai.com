import Container from "components/Container";
import Giscus from "components/Giscus";
import React from "react";

export default function Guestbook() {
  return (
    <Container title="留言板 - kaichi">
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-8 w-full p-1">
        <h1 className="mb-4 text-2xl md:text-2xl font-medium tracking-tight text-black dark:text-white">
          留言板
        </h1>
        <p className="mb-6 text-gray-600 dark:text-gray-400">
          欢迎大家评论留言。
        </p>
        <Giscus />
      </div>
    </Container>
  );
}
