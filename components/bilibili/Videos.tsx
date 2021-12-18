import { format, fromUnixTime } from "date-fns";
import fetcher from "lib/fetcher";
import { BilibiliVideo } from "lib/types";
import React from "react";
import useSWR from "swr";

export default function Videos() {
  const { data } = useSWR<{ data: BilibiliVideo[] }>(
    "/api/bilibili/videos?userId=12951817",
    fetcher
  );

  if (!data?.data) return <p>暂无视频</p>;

  return (
    <div className="w-full">
      {data.data.map((v) => (
        <a
          key={v.bvid}
          className="w-full"
          href={`https://www.bilibili.com/video/${v.bvid}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={v.title}
        >
          <div className="border-b py-4 px-2 flex font-medium items-center justify-between border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 rounded">
            <p>{v.title}</p>
            <span className=" text-sm flex items-center">
              {v.length}
              <svg className="h-6 w-6 ml-1 md:ml-2" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M10,16.5V7.5L16,12M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
                />
              </svg>
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}
