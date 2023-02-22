import '@/styles/globals.css'

import Link from 'next/link'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '../prismicio'
import { useRouter } from "next/router";


export default function App({ Component, pageProps }) {
  const router = useRouter(); 
  return (
    <PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>

      <PrismicPreview repositoryName={repositoryName}>
        <Component {...pageProps} key={router.asPath} />
      </PrismicPreview>
    </PrismicProvider>
  )
}