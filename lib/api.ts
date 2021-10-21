import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import Post from "../types/post";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []): Post {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const res = Object.create(null);

  fields.forEach((field) => {
    if (field === "slug") {
      res.slug = realSlug;
    }

    if (field === "content") {
      res.content = content;
    }

    if (data[field]) {
      if (field === "date") {
        res[field] = new Date(data[field]).getTime() / 1000;
        return;
      }

      if (field === "tags") {
        res[field] = (data[field] as string).split(",");
        return;
      }

      res[field] = data[field];
    }
  });

  return res;
}

export function getAllPosts(fields: Array<keyof Post>): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

// export function getPostsByPagination(
//   fields: Array<keyof Post>,
//   start = 0,
//   end = 5
// ): Post[] {
//   const slugs = getPostSlugs();
//   const posts = slugs
//     .map((slug) => getPostBySlug(slug, fields))
//     // sort posts by date in descending order
//     .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
//     .slice(start, end);

//   return posts;
// }
