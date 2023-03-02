import '@/styles/globals.css'
import Seo from "../components/Seo"

import Link from 'next/link'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '../prismicio'
import { useRouter } from "next/router";


export default function App({ Component, pageProps, canonical }) {
  const router = useRouter(); 
  return (
    <PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>

      <PrismicPreview repositoryName={repositoryName}>
        <Seo canonical={canonical} />
        <Component {...pageProps} canonical={canonical} key={router.asPath} />
      </PrismicPreview>
    </PrismicProvider>
  )
}

App.getInitialProps = ({ ctx }) => {
  const isProd = process.env.NODE_ENV === "production";
  const base = isProd ? "https://www.evenbloom.com" : "http://localhost:3000";
  const { asPath } = ctx;
  const canonical = base + asPath;

  return {
    canonical,
  };
};