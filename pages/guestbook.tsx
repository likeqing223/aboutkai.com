import Container from 'components/Container';
import Giscus from 'components/Giscus';
import React from 'react';

export default function Guestbook() {
  return (
    <Container
      title="留言"
      description="欢迎大家评论留言。"
      url="https://aboutkai.com/guestbook"
    >
      <div className="max-w-xl mx-auto mb-8 px-2">
        <h1 className="mb-4 text-2xl md:text-3xl font-medium tracking-tight">
          留言
        </h1>
        <p className="mb-6 text-gray-700 dark:text-gray-500">
          欢迎大家评论留言。
        </p>
        <Giscus />
      </div>
    </Container>
  );
}
