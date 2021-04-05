type Post = {
  author: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  slug?: string;
  coverImage?: string;
  ogImage?: {
    url: string;
  };
};

export default Post;
