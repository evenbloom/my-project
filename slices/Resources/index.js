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

      <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10 mt-14 gap-x-10'>
        {
          slice?.items?.map((item, i) => (
            <div field={item.cta_link} key={i} className={classNames('relative h-[400px] flex overflow-hidden flex-col rounded-2xl bg-mediumteal transform transition duration-500 hover:translate-y-[-1rem] cursor-pointer')}>
              <div field={item.cta_link} className='h-full'>
                <img src={item.resource_images.url} alt={item.resource_images.alt} className='w-full h-full object-cover absolute' />
                <div className='px-8 py-10 w-100% relative bg-overlay-gradient h-full flex flex-col justify-end'>
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
      </Container>

  </section>
)}

export default Resources