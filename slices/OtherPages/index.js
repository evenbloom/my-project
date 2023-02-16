import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import Container from '@/components/Container'
import RichText from '@/components/RichText'
import classNames from 'classnames'

/**
 * @typedef {import("@prismicio/client").Content.OtherPagesSlice} OtherPagesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<OtherPagesSlice>} OtherPagesProps
 * @param { OtherPagesProps }
 */
const OtherPages = ({ slice }) => (
  <section className='h-[100vh] mb-[80rem]'>
    <div className='relative w-full'>
      <div className='fixed w-full '>
        <img src={slice.primary.bg_cover.url} alt={slice.primary.bg_cover.alt} className=" bg-cover bg-no-repeat w-full over mask-linear-gradient backdrop-blur-[15px]"
        />
        <div className='absolute inset-0 bg-darkteal bg-opacity-70 bg-blend-overlay'></div>
      </div>
      <div className={classNames("mask-rise-radial-gradient  h-[60rem] overflow-hidden relative", "before:absolute before:opacity-[0.8] before:bg-rise-radial-gradient mask-linear-gradient bg-darkteal backdrop-blur-[80px] before:inset-0 after:absolute after:bg-darkteal after:rounded-[100%] after:top-1/2 after:-left-1/2 after:w-[200%] after:h-[142.8%] after:border-t after:border-[rgba(26,90,89,100%)]")}>
      </div>
      <div className='mt-[-42rem] relative '>
      <Container className='pt-[var(--navigation-height)]'>
        <div className='justify-center text-center items-center flex-col flex gap-10 relative'>
          <div>
            <img src={slice.primary.profile_picture.url} alt={slice.primary.profile_picture.alt} className='rounded-full w-[10rem] border-[1px] border-mediumteal' />
          </div>
          <div className='pb-12'>
            <RichText field={slice.primary.title} className='text-6xl font-bold uppercase text-lightteal mb-4'/>
            <RichText field={slice.primary.description} className='text-md text-mediumteal' />
          </div>
        
          </div>
          <div className='static flex flex-col justify-start flex-nowrap'>
              {
                slice?.items?.map((item, i) =>
                  <div key={i} className='flex w-100% py-10 items-center text-mediumteal md:flex-col flex-col'>
                    <div className=' flex pl-[3vw] md:w-[50%] w-[100%] relative gap-5 items-center text-xl'>
                      <span className='relative top-auto bottom-auto rounded-full border-[1px] text-center items-center justify-center p-6 flex w-[4rem] h-[4rem]' >{item.numbers}</span>
                      <PrismicRichText field={item.titles} />
                    </div>
                    <div className='pr-6vw  md:w-[50%] w-[100%] md:pl-10  pl-5 text-md pt-5 md:pt-8'>
                      <PrismicRichText field={item.description_about_me} />
                    </div>
                  </div>
                )
              }

          </div>
        </Container>
        </div>
      
      </div>
  </section>
)

export default OtherPages