import { useMDXComponent } from "next-contentlayer/hooks";
import components from "components/MDXComponents";
import AboutSiteLayout from "layouts/about-site";
import { allOtherPages } from ".contentlayer/data";
import type { OtherPage } from ".contentlayer/types";

export default function Uses({ body: { code } }: OtherPage) {
  const Component = useMDXComponent(code);

  return (
    <AboutSiteLayout>
      <Component components={{ ...components }} />
    </AboutSiteLayout>
  );
}

export async function getStaticProps() {
  const uses = allOtherPages.find((page) => page.slug === "about-site")!;

  return { props: uses };
}
