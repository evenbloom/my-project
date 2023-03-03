import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import RichText from '@/components/RichText'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import Container from '@/components/Container'
import classNames from 'classnames'


/**
 * @typedef {import("@prismicio/client").Content.WhatIOfferSlice} WhatIOfferSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<WhatIOfferSlice>} WhatIOfferProps
 * @param { WhatIOfferProps }
 */
const WhatIOffer = ({ slice }) => {
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
        opacity: 0,
        transition: {
          ease: [0.2, 0.8, 0.4, 1], duration: 0.8, delay: 0.38
        }
      });
      subheaderAnimation.start({
        y: 100,
        opacity: 0,
        transition: {
          ease: [0.2, 0.8, 0.4, 1], duration: 0.8, delay: 0.38
        }
      });
    }
  }, [inView, animation, subheaderAnimation]);

  return (
    <section className='w-full py-[10rem]'>
      <Container>
        <div ref={ref}>
        <motion.div animate={animation} className='text-center justify-center'>
          <RichText field={slice.primary.title_section} className="text-6xl font-bold uppercase text-lightteal mb-4 " />
          <motion.div animate={subheaderAnimation}>
            <RichText className="text-lg mt-2 text-mediumteal max-w-[560px] m-auto" field={slice.primary.section_description} />
          </motion.div>
          </motion.div>
          </div>

        <div className='items-center'>
          <img
            src='/design.svg'
            alt='what I offer design and development'
            className="mask-linear-gradient mt-14 overflow-hidden mx-auto"
          />
        </div>
      
        <div className='mt-14 grid grid-cols-1 sm:grid-cols-3 gap-x-8 items-start place-items-center gap-8 md:gap-0'>
          {slice?.items?.map((item, i) => (
            <div key={i}>
              <span className='text-lightteal'>{item.numbers}</span>
              <RichText field={item.title_points} className="text-lg  text-lightteal max-w-xs" />
                
              <RichText field={item.key_description} className=" text-mediumteal text-sm max-w-[27rem] mt-3" />
                
            </div>
          ))}
        </div>
        
      </Container>
    </section>
  )
}

export default WhatIOffer