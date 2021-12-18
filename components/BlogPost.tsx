import type { Blog } from ".contentlayer/types";
import fetcher from "lib/fetcher";
import Link from "next/link";
import useSWR from "swr";

export default function BlogPost({
  slug,
  title,
  description
}: Pick<Blog, "title" | "slug" | "description">) {
  const { data } = useSWR<{ total: string }>(`/api/views/${slug}`, fetcher);
  const views = data?.total;

  return (
    <Link href={`/blog/${slug}`}>
      <a className="w-full">
        <div className="py-3">
          <div className="flex flex-row justify-between">
            <p className="w-full mb-2 text-base font-medium">{title}</p>
            {views && (
              <span className="text-sm min-w-max">
                {Number(views).toLocaleString()} 阅读
              </span>
            )}
          </div>
          <p>{description}</p>
        </div>
      </a>
    </Link>
  );
}
