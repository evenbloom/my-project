import React from 'react'
import { PrismicRichText, PrismicLink } from '@prismicio/react'
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
 <section className='Hero h-[100vh] bg-hero-gradient'>
    <div className='relative'>
      <div className='absolute w-full'>
        <PrismicNextImage field={slice.primary.image} className=" bg-cover bg-no-repeat w-full over"
          style="background-position: 50%; height:1033px;"
        />
      </div>
    </div>
      <Container className='pt-[var(--navigation-height)]'>
        <div className='relative text-center h-[50vh] flex justify-center'>
          <div className='absolute text-center h-full mx-auto justify-center items-center flex flex-col'>
            <RichText field={slice.primary.title} className='text-6xl md:text-8xl font-bold md:text-teal animate-fade-in [--animation-delay:200ms] opacity-0 translate-y-[-1rem] uppercase text-lightteal bg-blend-overlay w-100%' />
            <RichText field={slice.primary.description} className='text-lg md:text-teal text-lightteal md:mt-2 mt-5 animate-fade-in [--animation-delay:400ms] opacity-0 translate-y-[-1rem]'/>
          
          <div className='flex gap-10'>
            
            
            
            


               {
                slice.items.map((item, i) => (
                  <PrismicLink
                    field={item.cta}
                    key={i}
                    className='mt-8  inline-flex rounded-lg bg-teal text-lg text-background px-5 py-2 animate-fade-in [--animation-delay:600ms] opacity-0 translate-y-[-1rem]'
                  >
                    <span >{ item.cta_text }</span>
                  </PrismicLink>
                ))
              } 
            
            </div>
          </div>
        </div>
      </Container>
    
    </section>
)

export default HeroSlice