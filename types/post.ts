type Post = {
  title: string;
  slug: string;
  author: string;
  date: number;
  content: string;
  excerpt?: string;
  coverImage?: string;
  tags?: string[];
  ogImage?: {
    url: string;
  };
};

export default Post;
