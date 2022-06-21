import { note } from '.contentlayer/data';
import { InferGetStaticPropsType } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';
import components from 'components/MDXComponents';
import Container from 'components/Container';
import MDWrapper from 'components/MDWrapper';

export default function Notes({
  note
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const Component = useMDXComponent(note.body.code);

  return (
    <Container
      title="笔记"
      description="好记性不如烂笔头"
      type="article"
      url={`https://aboutkai.com/notes`}
    >
      <article className="max-w-xl mx-auto mb-8 px-2">
        <MDWrapper>
          <Component components={components} />
        </MDWrapper>
        <a
          className="flex items-center text-sm text-gray-600 hover:text-gray-700 dark:hover:text-gray-400 font-medium mt-6"
          href={`https://github.com/kaichii/aboutkai.com/edit/main/data/notes.mdx`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>在 Github 上编辑</span>
        </a>
      </article>
    </Container>
  );
}

export function getStaticProps() {
  return { props: { note } };
}
