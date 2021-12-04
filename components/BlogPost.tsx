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
        <div className="mb-6">
          <div className="flex flex-row justify-between">
            <h4 className="w-full mb-2 text-base font-medium text-gray-900 dark:text-gray-100">
              {title}
            </h4>
            {views && (
              <span className="text-sm min-w-max text-gray-600 dark:text-gray-400">
                {Number(views).toLocaleString()} 阅读
              </span>
            )}
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            {description}
          </p>
        </div>
      </a>
    </Link>
  );
}
