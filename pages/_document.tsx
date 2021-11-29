import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="zh-Hans">
      <Head>
        <link
          rel="preload"
          href="/font/NotoSansSC-Regular.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <link href="/static/favicons/favicon.ico" rel="shortcut icon" />
        <link href="/static/favicons/site.webmanifest" rel="manifest" />
        <link
          href="/static/favicons/apple-touch-icon.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link
          href="/static/favicons/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="/static/favicons/favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
      </Head>
      <body className="bg-gray-50 dark:bg-gray-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
