import React from 'react'
import { PrismicRichText, PrismicLink } from '@prismicio/react'
import Container from '@/components/Container'
import RichText from '@/components/RichText'
import CustomLink from '@/components/CustomLink'
import classNames from 'classnames'
import Link from 'next/link'

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

      <div className='grid grid-cols-3 mt-14 gap-x-10'>
        {
          slice?.items?.map((item, i) => (
            <div field={item.cta_link} key={i} className={classNames('relative h-[400px] flex overflow-hidden flex-col rounded-2xl bg-mediumteal transform transition duration-500 hover:translate-y-[-1rem] cursor-pointer')}>
              <div field={item.cta_link} className='h-full'>
                <img src={item.resource_images.url} alt={item.resource_images.alt} className='w-full h-full object-cover absolute' />
                <div className='p-5 w-100% relative bg-overlay-gradient h-full flex flex-col justify-end'>
                  <RichText field={item.resource_header} className='text-md text-lightteal align-text-bottom font-semibold' />
                  <PrismicLink field={item.cta_link} className='mt-2 text-md text-lightteal flex items-baseline gap-2 transform duration-500 hover:gap-3'>
                    Get it now
                    <img src='/arrow-icon.svg'/>
                  </PrismicLink>
                </div>
              </div>
            </div>
          ))
        }
      </div>
      <div className={classNames("mask-rise-radial-gradient my-[-12.8rem] h-[60rem] -z-50 overflow-hidden relative", "before:absolute before:opacity-[0.4] rotate-180 before:bg-rise-radial-gradient before:inset-0 after:absolute after:bg-darkteal after:rounded-[50%] after:top-1/2 after:-left-1/2 after:w-[200%] after:h-[142.8%] after:border-t after:border-[rgba(26,90,89,100%)]")}>
      </div>
    </Container>
  </section>
)

export default Resources