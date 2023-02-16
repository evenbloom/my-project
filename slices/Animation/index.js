import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import RichText from '@/components/RichText'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import Container from '@/components/Container'
import Interaction from '@/components/Interaction'
import classNames from 'classnames'

/**
 * @typedef {import("@prismicio/client").Content.AnimationSlice} AnimationSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AnimationSlice>} AnimationProps
 * @param { AnimationProps }
 */
const Animation = ({ slice }) => {
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
  }, [inView]);

  return (
    <section className='section'>
      <div className={classNames("mask-rise-radial-gradient my-[-12.8rem] h-[60rem] overflow-hidden relative", "before:absolute before:opacity-[0.4] before:bg-rise-radial-gradient before:inset-0 after:absolute after:bg-darkteal after:rounded-[50%] after:top-1/2 after:-left-1/2 after:w-[200%] after:h-[142.8%] after:border-t after:border-[rgba(26,90,89,100%)]")}>
      </div>
      <div ref={ref} className=' pb-[20rem]'>
        <Container>
          <motion.div
            animate={animation}
            className='relative text-center justify-center'
          >
            <RichText field={slice.primary.title} className="text-6xl font-bold uppercase text-lightteal mb-4 " />
            <motion.div animate={subheaderAnimation}>
              <RichText field={slice.primary.description} className="text-lg mt-2 text-mediumteal max-w-[450px] m-auto" />
            </motion.div>
          </motion.div>

          <div className='w-full mt-[10.8rem] bg-box-gradient rounded-2xl overflow-hidden animate-fade-in [--animation-delay:200ms]'>
            <Interaction className='object-cover' />
          </div>
          <div className='grid md:grid-cols-2 grid-cols-1 gap-10 mt-10'>
            <div className='relative z-2 flex overflow-hidden h-100% flex-col py-[58px] px-[64px] bg-lightteal rounded-2xl'>
              <h3 className='text-4xl font-medium'>
                Clean efficient Code.
              </h3>
              <div className='flex mt-[48px] mr-[-64px] mb-[-58px] pt-2 items-center bg-Teal-gradient rounded-tl-2xl flex-1'>
                <img
                  src='/code.svg'
                  className="w-100% h-auto pl-6 py-2"
                />
              </div>
            </div >
            <div className='relative z-2 flex flex-col overflow-hidden h-100% pt-[58px] px-[auto] bg-lightteal rounded-2xl '>
              <h3 className='text-4xl font-medium mx-[58px]'>
                Responsive Development
              </h3>
              <div className="flex mt-[0] mx-auto mb-[0] flex-col justify-center items-end relative pt-5">
                <img
                  src='/responsive.svg'
                  className="w-100% h-[257px] object-contain object-bottom inline-block"
                />
              </div>
            </div>
          </div>

        </Container>
      </div>
    </section>
)};

export default Animation