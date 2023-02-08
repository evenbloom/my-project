import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import Container from '@/components/Container'
import RichText from '@/components/RichText'
import CustomLink from '@/components/CustomLink'
import classNames from 'classnames'

/**
 * @typedef {import("@prismicio/client").Content.ResourcesSlice} ResourcesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ResourcesSlice>} ResourcesProps
 * @param { ResourcesProps }
 */
const Resources = ({ slice }) => (
  <section className='py-[20rem]'>
    <Container>
      <div className='text-center justify-center'>
        <RichText field={slice.primary.title_section} className="text-6xl font-bold uppercase text-lightteal mb-4 " />
        <RichText field={slice.primary.sub_header}  className="text-lg mt-2 text-mediumteal max-w-[560px] m-auto" />
      </div>

      <div className='grid grid-cols-3 mt-10 gap-x-10'>
        {
          slice?.items?.map((item, i) => (
            <div key={i} className={classNames('relative h-[400px] flex overflow-hidden flex-col rounded-2xl bg-mediumteal')}>
              <img src={item.resource_images.url} alt={item.resource_images.alt} className='w-full h-full object-cover absolute' />
              <div className='p-5 w-100% relative bg-overlay-gradient h-full flex flex-col justify-end'>
                <RichText field={item.resource_header} className='text-md text-lightteal align-text-bottom' />
                <CustomLink field={item.cta_link}>
                  <p>Get it now</p>
                </CustomLink>
              </div>
            </div>
          ))
        }
      </div>
    </Container>
  </section>
)

export default Resources