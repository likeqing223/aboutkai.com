import {
  defineDocumentType,
  makeSource,
  ComputedFields
} from 'contentlayer/source-files';
import readingTime from 'reading-time';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrism from 'rehype-prism-plus';
import type { Element } from 'hast';
import rehypeUrls from 'rehype-urls';
import pkg from './package.json';

const computedFields: ComputedFields = {
  readingTime: {
    type: 'number',
    resolve: (doc) => readingTime(doc.body.raw).minutes
  },
  wordCount: {
    type: 'number',
    resolve: (doc) => doc.body.raw.split(/\s+/gu).length
  },
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, '')
  }
};

const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: 'blog/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    logo: { type: 'string' },
    publishedAt: { type: 'string', required: true }
  },
  computedFields
}));

const Notes = defineDocumentType(() => ({
  name: 'Notes',
  filePathPattern: 'notes.mdx',
  contentType: 'mdx',
  isSingleton: true,
  fields: {}
}));

const contentLayerConfig = makeSource({
  contentDirPath: 'data',
  documentTypes: [Blog, Notes],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      rehypePrism,
      [
        rehypeAutolinkHeadings,
        {
          test: [`h2`, `h3`, `h4`, `h5`, `h6`],
          properties: {
            className: ['anchor']
          }
        }
      ],
      [
        rehypeUrls,
        (url: URL, node: Element) => {
          const isInternalLink =
            url.href.startsWith('/') ||
            url.href.startsWith('#') ||
            url.host === new URL(pkg.homepage).host;

          if (!isInternalLink) {
            if (node.properties) {
              node.properties.target = '_blank';
              node.properties.rel = 'noopener noreferrer';
            }
          }
        }
      ]
    ]
  }
});

export default contentLayerConfig;
