import React from 'react'
import { PrismicRichText, PrismicLink } from '@prismicio/react'
import Container from '@/components/Container'
import RichText from '@/components/RichText'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import CustomLink from '@/components/CustomLink'
import classNames from 'classnames'
import Link from 'next/link'

/**
 * @typedef {import("@prismicio/client").Content.ResourcesSlice} ResourcesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ResourcesSlice>} ResourcesProps
 * @param { ResourcesProps }
 */
const Resources = ({ slice }) => {
  const { ref, inView } = useInView({
    threshold: 0.1
  });
  const animation = useAnimation();
  const subheaderAnimation = useAnimation();

  useEffect(() => {
    console.log("use effect hook, inView = ", inView);
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          ease: [0.2, 0.8, 0.4, 1], duration: 0.8, delay: 0.28
        }
      });
      subheaderAnimation.start({
        y: 0,
        opacity: 1,
        transition: {
          ease: [0.2, 0.8, 0.4, 1], duration: 0.8, delay: 0.38
        }
      });
    }
    if (!inView) {
      animation.start({
        y: 100,
        opacity: 0
      });
      subheaderAnimation.start({
        y: 100,
        opacity: 0
      });
    }
  }, [inView, animation, subheaderAnimation]);

  return(

  <section className='pt-[20rem]'>
    <Container>
        <div ref={ref} className='text-center justify-center'>
          <motion.div
            animate={animation}>
            <RichText field={slice.primary.title_section} className="text-6xl font-bold uppercase text-lightteal mb-4 " />
            <motion.div animate={subheaderAnimation}>
              <RichText field={slice.primary.sub_header} className="text-lg mt-2 text-mediumteal max-w-[560px] m-auto" />
            </motion.div>
          </motion.div>
      </div>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10 mt-14 gap-x-10 h-min relative w-[100%] flex-grow-0 flex-shrink-0 flex-auto'>
        {
          slice?.items?.map((item, i) => (
             <PrismicLink field={item.cta_link} key={i} className='relative flex overflow-hidden flex-col flex-nowrap rounded-2xl bg-mediumteal cursor-pointer h-[400px]'>
  <div className='overflow-visible h-[400px] w-[100%]'>
    <div className='absolute'>
      <div className="group relative">
        <img src={item.resource_images.url} alt={item.resource_images.alt} className='object-cover mask-linear-gradient transform transition duration-500 group-hover:scale-110' />
        <div className="absolute inset-0 bg-teal rounded-2xl opacity-60 group-hover:opacity-80 transition-all duration-500 flex items-end place-content-end justify-start h-[400px] px-8 py-6">
          <div className='items-center place-content-center flex flex-nowrap relative flex-row flex-auto flex-shrink-0 flex-grow-0'>
            <div className='relative p-4'>
              <div className='absolute -inset-1 bg-mediumteal rounded-full w-13 transform transition duration-500 group-hover:w-[150px]' />
              <img src='/arrow-icon.svg' alt='Arrow icon' className='m-auto transform -rotate-45 group-hover:rotate-0 origin-center transition duration-300'/>
            </div>
            <div className='flex flex-row flex-nowrap items-center h-[60px] place-content-center relative text-lightteal'>
              <RichText field={item.cta_text}  className='opacity-0 transform transition duration-200 group-hover:opacity-100 text-md align-baseline'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className='overflow-hidden flex items-end flex-shrink-0 flex-grow-0 flex-auto flex-col flex-nowrap place-content-end absolute px-8 py-6'>
    <div>
      <div className='flex flex-shrink-0 flex-grow-0 flex-auto flex-col flex-nowrap'>
        <RichText field={item.resource_header} className='text-md text-lightteal font-semibold' />
      </div>
    </div>
  </div>
</PrismicLink>
          ))
        }
      </div>
      </Container>

  </section>
)}

export default Resources