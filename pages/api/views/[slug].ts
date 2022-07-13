import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from 'lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const slug = req.query.slug?.toString();

    if (slug) {
      if (req.method === 'POST') {
        // 记录浏览次数
        const upsertViews = await prisma.views.upsert({
          where: { slug },
          create: {
            slug
          },
          update: {
            count: {
              increment: 1
            }
          }
        });

        return res.status(200).json({
          total: upsertViews.count.toString()
        });
      }
    }

    // 查询浏览次数
    if (req.method === 'GET') {
      const views = await prisma.views.findUnique({
        where: {
          slug
        }
      });

      return res.status(200).json({ total: views?.count.toString() });
    }
  } catch (e) {
    return res.status(500);
  }
}
