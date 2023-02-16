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
 <section className='Hero h-[100vh] bg-hero-gradient'>
    <div className='relative'>
      <div className='absolute w-full'>
        <PrismicNextImage field={slice.primary.image} className=" bg-cover bg-no-repeat w-full over"
          style="background-position: 50%; height:1033px;"
        />
      </div>
    </div>
      <Container className='pt-[var(--navigation-height)]'>
        <div className='relative text-center h-[50vh]'>
          <div className='absolute text-center h-full mx-auto justify-center items-center flex flex-col'>
            <RichText field={slice.primary.title} className='text-6xl md:text-8xl font-bold md:text-teal animate-fade-in [--animation-delay:200ms] opacity-0 translate-y-[-1rem] uppercase text-lightteal bg-blend-overlay w-100%' />
            <RichText field={slice.primary.description} className='text-lg md:text-teal text-lightteal md:mt-2 mt-5 animate-fade-in [--animation-delay:400ms] opacity-0 translate-y-[-1rem]'/>
          
          <div className='flex gap-10'>
            <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" className='mt-8 inline-flex rounded-lg bg-teal text-lg text-background px-5 py-2 animate-fade-in [--animation-delay:600ms] opacity-0 translate-y-[-1rem] hover:bg-mediumteal transition duration-150 ease-in-out'>
              About
            </button>
            <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" className='mt-8 inline-flex rounded-lg border-solid border-2 border-teal text-lg text-teal px-5 py-2 animate-fade-in [--animation-delay:600ms] opacity-0 translate-y-[-1rem] hover:border-mediumteal transition duration-150 ease-in-out'>
              E-Mail
            </button>
            
            
            


              {/* {
                slice.items.map((item, i) => (
                  <CustomLink
                    link={item.cta_link}
                    text={item.cta_text}
                    key={i}
                    className='mt-8  inline-flex rounded-lg bg-teal text-lg text-background px-5 py-2 animate-fade-in [--animation-delay:600ms] opacity-0 translate-y-[-1rem]'
                  />
                ))
              } */}
            
            </div>
          </div>
        </div>
      </Container>
    
    </section>
)

export default HeroSlice