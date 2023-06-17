import * as React from 'react';
const siteMetadata = {
  name: "Sheffield AI",
  titleTemplate: "%s | Sheffield AI",
  longDescription: "description",
  shortDescription: "description",
  themeColour: "#009FFD",
  siteUrl: "https://sheffield.ai",
  siteLogoUrl: "https://sheffield.ai/logo-1200-627.png",
  siteLogoUrlSquare: "https://sheffield.ai/logo-withtext-square-box",
}

type Props = {
  title?: string;
  description?: string;
  imageUrl?: string;
  route?: string;
  children?: React.ReactNode | React.ReactNode[];
}

const CommonHeadTags: React.FC<Props> = props => {
  let image = props.imageUrl || siteMetadata.siteLogoUrl;
  if (!image.startsWith('http')) {
    image = siteMetadata.siteUrl + image;
  }
  return <>
    <title>{props.title || siteMetadata.name}</title>
    <meta name="description" content={props.description || siteMetadata.longDescription} />
    <meta name="image" content={image} />
    <meta name="theme-color" content={siteMetadata.themeColour} />
    <meta property="og:url" content={siteMetadata.siteUrl + (props.route ? props.route : '')} />
    <meta property="og:title" content={props.title || siteMetadata.name} />
    <meta property="og:description" content={props.description || siteMetadata.longDescription} />
    <meta property="og:image" content={image} />
    <meta name="twitter:card" content={props.imageUrl ? "summary_large_image" : "summary"} />
    {/* <meta name="twitter:site" content={`@${siteMetadata.social.twitter.handle}`} />
    <meta name="twitter:creator" content={`@${siteMetadata.social.twitter.handle}`} /> */}
    <meta name="twitter:title" content={props.title || siteMetadata.name} />
    <meta name="twitter:description" content={props.description || siteMetadata.longDescription} />
    <meta name="twitter:image" content={image} />
    {props.children}
  </>
}

export default CommonHeadTags;