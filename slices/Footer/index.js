import React from 'react'
import { PrismicRichText, PrismicLink } from '@prismicio/react'
import Container from '@/components/Container'
import RichText from '@/components/RichText'
import classNames from 'classnames'

/**
 * @typedef {import("@prismicio/client").Content.FooterSlice} FooterSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FooterSlice>} FooterProps
 * @param { FooterProps }
 */
const Footer = ({ slice }) => {
    const year = new Date().getFullYear()

    return (
      <footer className='relative'>
        <div className={classNames("mask-rise-radial-gradient my-[-12.8rem] h-[60rem] -z-50 overflow-hidden relative", "before:absolute before:opacity-[0.4] rotate-180 before:bg-rise-radial-gradient before:inset-0 after:absolute after:bg-darkteal after:rounded-[50%] after:top-1/2 after:-left-1/2 after:w-[200%] after:h-[142.8%] after:border-t after:border-[rgba(26,90,89,100%)]")}>
        </div>
        <Container>
          <div className='justify-center text-center px-4 pb-[12rem]'>
            <RichText field={slice.primary.title_cta} className='text-6xl font-bold uppercase text-lightteal mb-4' />
            <PrismicLink field={slice.primary.cta_link} className='mt-8 inline-flex rounded-lg bg-teal text-lg text-background px-5 py-2 animate-fade-in [--animation-delay:600ms] opacity-0 translate-y-[-1rem] hover:bg-mediumteal transition duration-150 ease-in-out'>
              <span >{slice.primary.cta_text}</span>
            </PrismicLink>
          </div>
          <div className='flex gap-10 py-[8rem] justify-between flex-col md:flex-row text-center md:text-left'>
            <div className='text-md'>
              <p>&copy; {year} <span>– Handcrafted using <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a>, <a href="https://www.nextjs.org/" target="_blank" rel="noopener noreferrer"> Next.js</a> & <a href="https://www.prismic.io/" target="_blank" rel="noopener noreferrer">Prismic</a></span></p>
            </div>
            <div className='flex gap-10  justify-center md:justify-end text-center md:text-left'>
              {
                slice?.items?.map((item, i) =>
                  <div key={i}>
                    <PrismicLink field={item.social_links} className='hover:text-mediumteal'>
                      <span className='text-md'>{item.socials_text}</span>
                    </PrismicLink>
                  </div>
              
                )
                }
            </div>
          </div>
        </Container>

      </footer>
    )
  
}

export default Footer