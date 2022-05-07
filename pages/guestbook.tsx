import Container from 'components/Container';
import Giscus from 'components/Giscus';
import React from 'react';

export default function Guestbook() {
  return (
    <Container
      title="留言板"
      description="欢迎大家评论留言。"
      url="https://aboutkai.com/guestbook"
    >
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-8 w-full">
        <h1 className="mb-4 text-2xl md:text-3xl font-medium tracking-tight">
          留言板
        </h1>
        <p className="mb-6 text-gray-700 dark:text-gray-500">
          欢迎大家评论留言。
        </p>
        <Giscus />
      </div>
    </Container>
  );
}
