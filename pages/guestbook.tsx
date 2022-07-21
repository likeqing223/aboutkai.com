import Container from 'components/Container';
import React from 'react';
import Giscus from '@giscus/react';
import { useTheme } from 'next-themes';

const themeMapping = {
  light: 'light',
  dark: 'transparent_dark'
};

export default function Guestbook() {
  const { resolvedTheme } = useTheme();

  const attributes = {
    src: 'https://giscus.app/client.js',
    id: 'giscus-script',
    'data-repo': 'kaichii/aboutkai.com',
    'data-repo-id': 'R_kgDOGdan3g',
    'data-category': 'Comment',
    'data-category-id': 'DIC_kwDOGdan3s4CAKgf',
    'data-mapping': 'pathname',
    'data-theme': themeMapping[resolvedTheme as keyof typeof themeMapping],
    'data-lang': 'zh-CN',
    crossOrigin: 'anonymous',
    async: ''
  };

  return (
    <Container
      title="留言"
      description="欢迎大家评论留言。"
      url="https://aboutkai.com/guestbook"
    >
      <div className="max-w-prose mx-auto mb-8 px-2">
        <h1 className="mb-4 text-2xl md:text-3xl font-medium tracking-tight">
          留言
        </h1>
        <p className="mb-6 text-gray-700 dark:text-gray-500">
          欢迎大家评论留言（下面的评论组件可能会有点儿慢）。
        </p>
        <Giscus
          id="comments"
          repo="kaichii/aboutkai.com"
          repoId="R_kgDOGdan3g"
          category="Comment"
          categoryId="DIC_kwDOGdan3s4CAKgf"
          mapping="pathname"
          term="Welcome to comment"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme={themeMapping[resolvedTheme as keyof typeof themeMapping]}
          lang="zh-CN"
          loading="eager"
        />
      </div>
    </Container>
  );
}
