import Image, { ImageProps } from "next/image";
import React from "react";

// eslint-disable-next-line react/display-name
// const CustomLink = forwardRef(
//   (
//     props: AnchorHTMLAttributes<HTMLAnchorElement>,
//     ref: LegacyRef<HTMLAnchorElement>
//   ) => {
//     const { href } = props;
//     const isInternalLink =
//       href && (href?.startsWith("/") || href?.startsWith("#"));

//     if (isInternalLink) {
//       return (
//         <Link href={href} {...props} passHref>
//           <a ref={ref}>{props.children}</a>
//         </Link>
//       );
//     }

//     return <a target="_blank" rel="noopener noreferrer" {...props} />;
//   }
// );

function RoundedImage(props: ImageProps) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

const MDXCompnents = {
  // a: CustomLink,
  Image: RoundedImage
};

export default MDXCompnents;
