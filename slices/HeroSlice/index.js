import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'
import RichText from '@/components/RichText'
import CustomLink from '@/components/CustomLink'
import Container from '@/components/Container'

/**
 * @typedef {import("@prismicio/client").Content.HeroSliceSlice} HeroSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSliceSlice>} HeroSliceProps
 * @param { HeroSliceProps }
 */
const HeroSlice = ({ slice }) => (
 <section className='Hero h-[80vh] bg-hero-gradient'>
    <div className='relative'>
      <div className='absolute w-full'>
        <PrismicNextImage field={slice.primary.image} className=" bg-cover bg-no-repeat w-full over"
          style="background-position: 50%; height:1033px;"
        />
      </div>
    </div>
      <Container className='pt-[var(--navigation-height)]'>
        <div className='relative text-center pt-[300px]'>
          <div className='absolute text-center h-full'>
            <RichText field={slice.primary.title} className='text-6xl md:text-8xl font-bold text-teal-700 font-map animate-fade-in [--animation-delay:200ms] opacity-0 translate-y-[-1rem] uppercase' />
            <RichText field={slice.primary.description} className='text-lg text-teal-700 mt-2 animate-fade-in [--animation-delay:400ms] opacity-0 translate-y-[-1rem]'/>
          
            <div>
              {
                slice.items.map((item, i) => (
                  <CustomLink
                    link={item.cta_link}
                    text={item.cta_text}
                    key={i}
                    className='mt-8 inline-flex rounded-lg bg-teal text-lg text-background px-5 py-2 animate-fade-in [--animation-delay:600ms] opacity-0 translate-y-[-1rem]'
                  />
                ))
              }
            </div>
          </div>
        </div>
      </Container>
    
    </section>
)

export default HeroSlice