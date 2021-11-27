import fetcher from "lib/fetcher";
import { BilibiliBangumi } from "lib/types";
import useSWR from "swr";

export default function Bangumis() {
  const { data, error } = useSWR<{ data: BilibiliBangumi[] }>(
    "/api/bilibili/bangumi?userId=12951817",
    fetcher
  );

  console.log(data?.data);

  return <div>Bangumis</div>;
}
