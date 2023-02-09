import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import Container from '@/components/Container'
import RichText from '@/components/RichText'

/**
 * @typedef {import("@prismicio/client").Content.OtherPagesSlice} OtherPagesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<OtherPagesSlice>} OtherPagesProps
 * @param { OtherPagesProps }
 */
const OtherPages = ({ slice }) => (
  <section className='py-[20rem]'>
    <Container className='pt-[var(--navigation-height)]'>
      <div className='grid grid-cols-2 items-center gap-10'>
        <div>
          <RichText field={slice.primary.title} className='text-6xl font-bold uppercase text-lightteal mb-4'/>
          <RichText field={slice.primary.description} className='text-md text-mediumteal' />
        </div>
        <div>
          <img src={slice.primary.profile_picture.url} alt={slice.primary.profile_picture.alt} className='rounded-2xl' />
        </div>
      </div>
    </Container>

  </section>
)

export default OtherPages