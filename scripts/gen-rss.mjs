import { writeFileSync } from 'fs';
import RSS from 'rss';
import { allBlogs } from '.contentlayer/data';

function generate() {
  const feed = new RSS({
    title: 'kaichi',
    site_url: 'https://aboutkai.com',
    feed_url: 'https://aboutkai.com/feed.xml'
  });

  allBlogs.map((p) => {
    feed.item({
      title: p.title,
      url: `https://aboutkai.com/blog/${p.slug}`,
      date: p.publishedAt,
      description: p.description
    });
  });

  writeFileSync('./public/feed.xml', feed.xml({ indent: true }));
}

generate();
