import { format, fromUnixTime } from "date-fns";
import fetcher from "lib/fetcher";
import { BilibiliVideo } from "lib/types";
import React from "react";
import useSWR from "swr";
import Image from "next/image";

export default function Videos() {
  const { data } = useSWR<{ data: BilibiliVideo[] }>(
    "/api/bilibili/videos?userId=12951817",
    fetcher
  );

  if (!data?.data)
    return <p className="text-gray-600 dark:text-gray-400">暂无视频</p>;

  return (
    <div className="flex w-full gap-2 flex-col md:flex-row">
      {/* {data.data.slice(0, 4).map((v) => (
        <div
          key={v.bvid}
          className="w-[160px] h-[148px] hover:text-white text-transparent"
        >
          <div className="relative w-[160px] h-[100px]">
            <Image
              src={v.pic}
              alt={v.title}
              width={160}
              height={100}
              className="aspect-w-16 aspect-h-10 rounded"
            />
            <p className="absolute left-2 bottom-2 text-xs opacity-0 transition-opacity duration-300">
              {v.length}
            </p>
            <div className="absolute inset-0 hover:bg-[rgba(0,0,0,.2)] transition-all duration-300" />
          </div>
        </div>
      ))} */}
      {data.data.slice(0, 3).map((v) => (
        <a
          key={v.bvid}
          className="w-full transform hover:scale-[1.01] transition-all"
          href={`https://www.bilibili.com/video/${v.bvid}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={v.title}
        >
          <div className="border-2 flex flex-col justify-between h-full bg-white dark:bg-gray-900 p-4 rounded-md">
            <h4>{v.title}</h4>
            <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mt-1">
              <span>{format(fromUnixTime(v.created), "yyyy-MM-dd")}</span>
              <div className="flex items-center">
                <span>{v.length}</span>
                <svg
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 ml-1.5 text-biliPink"
                >
                  <path
                    d="M830.577778 227.555556H657.066667l74.903703-70.162963c11.377778-11.377778 11.377778-29.392593 0-39.822223-5.688889-5.688889-13.274074-8.533333-21.807407-8.533333-7.585185 0-15.17037 2.844444-21.807407 8.533333L570.785185 227.555556H456.059259L338.488889 117.57037c-5.688889-5.688889-13.274074-8.533333-21.807408-8.533333-7.585185 0-15.17037 2.844444-21.807407 8.533333-11.377778 11.377778-11.377778 29.392593 0 39.822223L369.777778 227.555556H193.422222C117.57037 227.555556 56.888889 295.822222 56.888889 381.155556v332.8c0 85.333333 60.681481 153.6 136.533333 153.6h42.666667c0 25.6 22.755556 47.407407 50.251852 47.407407s50.251852-20.859259 50.251852-47.407407h353.659259c0 25.6 22.755556 47.407407 50.251852 47.407407s50.251852-20.859259 50.251852-47.407407h38.874074c75.851852 0 136.533333-69.214815 136.533333-153.6V381.155556c0.948148-85.333333-59.733333-153.6-135.585185-153.6zM698.785185 574.577778L425.718519 733.866667c-22.755556 13.274074-41.718519 2.844444-41.718519-24.651852V389.688889c0-26.548148 18.962963-37.925926 41.718519-24.651852l273.066666 160.237037c22.755556 14.222222 22.755556 35.081481 0 49.303704z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
