import type { NextApiRequest, NextApiResponse } from "next";
import { get } from "lodash";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!req.query.userId) {
    return res.status(404).send("缺少参数 userId");
  }

  const api = `https://api.bilibili.com/x/space/bangumi/follow/list?vmid=${req.query.userId}&type=1&jsonp=jsonp`;

  const response = await fetch(api);

  const data = await response.json();

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=1200, stale-while-revalidate=600"
  );

  return res.status(200).json({
    data: get(data, ["data", "list"])
  });
}