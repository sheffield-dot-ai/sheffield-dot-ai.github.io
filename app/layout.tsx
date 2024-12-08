import type { Metadata } from "next";
import "./globals.css";
import "./muivars.css";
import Script from "next/script";
import { WebSite, WithContext } from 'schema-dts';

export const metadata: Metadata = {
  title: "Sheffield AI",
  description: "AI community in Sheffield hosting quarterly events and other activities.",
  openGraph: {
    siteName: "Sheffield AI"
  }
};

const jsonLdWebsite: WithContext<WebSite> = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Sheffield AI',
  url: 'https://sheffield.ai/',
  description: metadata.description!
}


export default function RootLayout(props: React.PropsWithChildren<{}>) {
  return (
    <html lang="en">
      <body>
        {props.children}
        <Script
          id="json-ld-website"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />

      </body>
    </html>
  );
}