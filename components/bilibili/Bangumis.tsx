import fetcher from "lib/fetcher";
import { BilibiliBangumi } from "lib/types";
import useSWR from "swr";
import Image from "next/image";

export default function Bangumis() {
  const { data } = useSWR<{ data: BilibiliBangumi[] }>(
    "/api/bilibili/bangumi?userId=12951817",
    fetcher
  );

  if (!data?.data)
    return <p className="text-gray-600 dark:text-gray-400">暂无追番</p>;

  return (
    <div className="flex w-full gap-6 md:gap-8 flex-row">
      {data?.data.slice(0, 4).map((d, i) => {
        return (
          <div key={i}>
            <a
              href={d.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={d.title}
              className="md:hidden relative"
            >
              <Image
                src={d.square_cover}
                alt={d.title}
                width="120px"
                height="120px"
                className="rounded-md"
              />
            </a>
            <a
              href={d.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={d.title}
              className="relative hidden md:inline-block"
            >
              <Image
                src={d.cover}
                alt={d.title}
                width="165px"
                height="210px"
                className="rounded-lg"
              />
              <p>{d.title}</p>
            </a>
          </div>
        );
      })}
    </div>
  );
}
