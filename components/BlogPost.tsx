import type { Blog } from ".contentlayer/types";
import Link from "next/link";

export default function BlogPost({
  slug,
  title,
  description
}: Pick<Blog, "title" | "slug" | "description">) {
  return (
    <Link href={`/blog/${slug}`}>
      <a className="w-full">
        <div className="mb-8">
          <div className="flex flex-row justify-between">
            <h4 className="w-full mb-2 text-[18px] font-medium text-gray-900 md:text-xl dark:text-gray-100">
              {title}
            </h4>
            <div className="flex items-center text-gray-800 dark:text-gray-200">
              <svg
                className="w-6 h-6"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M512 832c-156.448 0-296.021333-98.730667-418.410667-291.605333a52.938667 52.938667 0 0 1 0-56.789334C215.978667 290.730667 355.552 192 512 192c156.448 0 296.021333 98.730667 418.410667 291.605333a52.938667 52.938667 0 0 1 0 56.789334C808.021333 733.269333 668.448 832 512 832z m0-576c-129.514667 0-249.461333 83.850667-360.117333 256C262.538667 684.149333 382.485333 768 512 768c129.514667 0 249.461333-83.850667 360.117333-256C761.461333 339.850667 641.514667 256 512 256z m0 405.333333c-83.210667 0-150.666667-66.858667-150.666667-149.333333S428.789333 362.666667 512 362.666667s150.666667 66.858667 150.666667 149.333333S595.210667 661.333333 512 661.333333z m0-64c47.552 0 86.101333-38.208 86.101333-85.333333S559.552 426.666667 512 426.666667c-47.552 0-86.101333 38.208-86.101333 85.333333s38.549333 85.333333 86.101333 85.333333z"
                  fill="currentColor"
                ></path>
              </svg>
              <span className="ml-2">0</span>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-400">{description}</p>
        </div>
      </a>
    </Link>
  );
}
