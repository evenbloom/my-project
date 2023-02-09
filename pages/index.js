import { SliceZone } from '@prismicio/react'

import { createClient } from '../prismicio'
import { components } from '../slices'
import { Navigation } from '../components/Navigation'

const Page = ({ page, navigation, settings }) => {
  return (
    <div>
      <Navigation navigation={navigation} />
      {/* The rest of your component... */}
      <SliceZone slices={page.data.slices} components={components} />
    </div>
  )
}

export default Page

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })

  const page = await client.getSingle('homepage')
  const navigation = await client.getSingle('navigation')

  return {
    props: {
      navigation,
      page,
    },
  }
}