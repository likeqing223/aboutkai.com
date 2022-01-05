import { useTheme } from 'next-themes';
import Head from 'next/head';
import { useEffect, useRef } from 'react';

const themeMapping = {
  light: 'light',
  dark: 'transparent_dark'
};

export default function Giscus() {
  const { resolvedTheme } = useTheme();
  const theme = useRef(resolvedTheme);

  useEffect(() => {
    const hasLoaded = theme.current && theme.current !== resolvedTheme;
    theme.current = resolvedTheme;
    if (!resolvedTheme || hasLoaded) return;

    const script = document.createElement('script');
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

    Object.entries(attributes).forEach(([name, value]) =>
      script.setAttribute(name, value)
    );
    document.body.appendChild(script);

    return () => {
      const existingScript = document.body.querySelector('#giscus-script');
      if (existingScript) document.body.removeChild(existingScript);
    };
  }, [resolvedTheme]);

  useEffect(() => {
    const iframe = document.querySelector<HTMLIFrameElement>(
      'iframe.giscus-frame'
    );
    iframe?.contentWindow?.postMessage(
      {
        giscus: {
          setConfig: {
            theme: themeMapping[resolvedTheme as keyof typeof themeMapping]
          }
        }
      },
      'https://giscus.app'
    );
  }, [resolvedTheme]);

  return (
    <>
      <Head>
        {Object.values(themeMapping).map((theme) => (
          <link
            key={theme}
            rel="prefetch"
            href={`https://giscus.app/themes/${theme}.css`}
            as="style"
            type="text/css"
            crossOrigin="anonymous"
          />
        ))}
      </Head>
      <div className="giscus" />
    </>
  );
}
