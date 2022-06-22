import Container from 'components/Container';
import MDWrapper from 'components/MDWrapper';
import { getReasonPhrase, StatusCodes } from 'http-status-codes';

export default function Custom404() {
  const codes = Object.keys(StatusCodes)
    .filter((c) => !isNaN(Number(c)))
    .reduce<Record<number, string[]>>((p, c) => {
      p[+c.charAt(0)] = [...(p[+c.charAt(0)] ?? []), c];
      return p;
    }, {});

  const CodeInfos: Record<number, string> = {
    1: '信息响应',
    2: '成功响应',
    3: '重定向',
    4: '客户端错误',
    5: '服务器错误'
  };

  return (
    <Container
      title="Page Not Found"
      description="Page Not Found"
      url="https://aboutkai.com/404"
    >
      <div className="max-w-prose mx-auto mb-8 px-2">
        <h1 className="mb-6">404 - 资源未找到</h1>
        <p className="text-gray-700 dark:text-gray-500 mb-16">
          这里本来有什么？或者什么也没有。
        </p>
        <MDWrapper>
          <h2>HTTP 状态码</h2>
          {Object.entries(codes).map(([i, cs]) => (
            <div key={i}>
              <h3 className="text-lg">
                {i}xx - {CodeInfos[+i]}
              </h3>
              <ul>
                {cs.map((c) => (
                  <li key={c}>
                    <a
                      target="_blank"
                      href={`https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/${c}`}
                    >
                      {c}
                    </a>
                    <span> - </span>
                    {getReasonPhrase(c)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </MDWrapper>
      </div>
    </Container>
  );
}
