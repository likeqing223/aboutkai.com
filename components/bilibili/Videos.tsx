import fetcher from "lib/fetcher";
import { BilibiliVideo } from "lib/types";
import useSWR from "swr";

export default function Videos() {
  const { data, error } = useSWR<{ data: BilibiliVideo[] }>(
    "/api/bilibili/videos?userId=12951817",
    fetcher
  );

  console.log(data?.data);

  return <div>videos</div>;
}
