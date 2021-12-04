import type { NextApiRequest, NextApiResponse } from "next";
import get from "lodash.get";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (!req.query.userId) {
      return res.status(404).send("缺少参数 userId");
    }

    const api = `https://api.bilibili.com/x/space/arc/search?mid=${req.query.userId.toString()}&pn=1&ps=25&index=1&jsonp=jsonp`;

    const response = await fetch(api);

    const data = await response.json();

    res.setHeader(
      "Cache-Control",
      "public, s-maxage=1200, stale-while-revalidate=600"
    );

    return res.status(200).json({
      data: get(data, ["data", "list", "vlist"], [])
    });
  } catch (e) {
    return res.status(500);
  }
}
