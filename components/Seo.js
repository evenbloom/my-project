import Head from "next/head";

const DOMAIN = "https://www.evenbloom.com";

export default function Seo({
  title = "EvenBloom | Expert UI Designer & Front-end Developer in the UK",
  description = "As an interdisciplinary creative, I specialize in UI design and front-end development. Let me bring your digital vision to life.",
  sitename = "EvenBloom",
  canonical = DOMAIN,
  ogType = "website",
  twitterHandle = "@evenbloom",
}) {
  return (
    <Head>
      <title key="title">{`${title} - ${sitename}`}</title>
      <meta name="description" content={description} />
      <meta key="og_type" property="og:type" content={ogType} />
      <meta key="og_title" property="og:title" content={title} />
      <meta key="og_descrition" property="og:description" content={description} />
      <meta key="og_locale" property="og:locale" content="en_IE" />
      <meta key="og_site_name" property="og:site_name" content={sitename} />
      <meta key="og_url" property="og:url" content={canonical ?? DOMAIN} />
      <meta
        key="twitter:card"
        name="twitter:card"
        content="summary_large_image"
      />
      <meta
        key="twitter:site"
        name="twitter:site"
        content={twitterHandle}
      />
      <meta
        key="twitter:creator"
        name="twitter:creator"
        content={twitterHandle}
      />
      <meta
        key="twitter:title"
        property="twitter:title"
        content={title}
      />
      <meta
        key="twitter:description"
        property="twitter:description"
        content={description}
      />

      <link rel="canonical" href={canonical ?? DOMAIN} />
      <link rel="shortcut icon" href="/favicon.ico" />

    </Head>
  )
}