import classNames from "classnames";
import { format, fromUnixTime } from "date-fns";
import fetcher from "lib/fetcher";
import { BilibiliVideo } from "lib/types";
import React from "react";
import useSWR from "swr";

export default function Videos({ videos }: { videos: BilibiliVideo[] }) {
  if (!videos) return <p>暂无视频</p>;

  return (
    <div className="w-full">
      {videos.map((v, i) => (
        <a
          key={v.bvid}
          className="w-full"
          href={`https://www.bilibili.com/video/${v.bvid}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={v.title}
        >
          <div
            className={classNames(
              "transform hover:scale-[1.01] transition-all",
              "border-b py-4 flex font-medium items-center justify-between border-gray-200 dark:border-gray-700"
            )}
          >
            <p>{v.title}</p>
            <span className=" text-sm flex items-center">
              <span className="text-gray-700 dark:text-gray-600">{v.length}</span>
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
