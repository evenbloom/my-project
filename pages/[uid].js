import { SliceZone } from '@prismicio/react'
import * as prismicH from '@prismicio/helpers'
import Head from 'next/head'
import { createClient, linkResolver } from '../prismicio'
import { components } from '../slices'
import { Navigation } from '@/components/Navigation'

const Page = ({ page, navigation, settings }) => {
  return (
    <div>
      <Head></Head>
      <Navigation navigation={navigation} />
      {/* The rest of your component... */}
      <SliceZone slices={page.data.slices} components={components} />
    </div>
  )
}



export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData })

  const page = await client.getByUID('page', params.uid)
  const navigation = await client.getSingle('navigation')

  return {
    props: {
      navigation,
      page,
    },
  }
}

export async function getStaticPaths() {
  const client = createClient()

  const pages = await client.getAllByType('page')

  return {
    paths: pages.map((page) => prismicH.asLink(page, linkResolver)),
    fallback: false,
  }
}

export default Page