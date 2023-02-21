import { PrismicLink, PrismicRichText } from '@prismicio/react'
import Container from './Container'
import { useEffect, useState } from "react";
import { HamburgerIcon } from './icons/Hamburger'
import Link from 'next/link'
import classNames from 'classnames';
import RichText from './RichText';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer'


export function Navigation({ navigation }) {
  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);
  
  useEffect(() => {
    const html = document.querySelector("html");
    if (html) html.classList.toggle("overflow-hidden", hamburgerMenuIsOpen);
  }, [hamburgerMenuIsOpen]);

  useEffect(() => {
    const closeHamburgerNavigation = () => setHamburgerMenuIsOpen(false);

    window.addEventListener("orientationchange", closeHamburgerNavigation);
    window.addEventListener("resize", closeHamburgerNavigation);

    return () => {
      window.removeEventListener("orientationchange", closeHamburgerNavigation);
      window.removeEventListener("resize", closeHamburgerNavigation);
    };
  }, [setHamburgerMenuIsOpen]);

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
  }, [inView]);
  
  return (
    <header className='fixed z-10 left-0 right-0 md:top-2 top-0 backdrop-blur-[15px] bg-darkteal md:rounded-[10rem] rounded-0 bg-opacity-20 md:w-[1200px] md:mx-auto md:inline-block'>
  
      
          {/* Renders top-level links. */}
    {navigation.data.slices.map((slice) => {
      
            return (
              <Container className="flex h-navigation-height justify-between">
                <PrismicLink  field={slice.primary.logo_link} className='flex items-center text-md'>  
                  <img src={slice.primary.logo.url} alt={slice.primary.logo.alt} className="w-14" />

                </PrismicLink> 



                <nav
                  className={classNames(
                  'h-[100vh] transition-opacity duration-500 fixed -z-10 md:-z-0 top-0 left-0 w-full pr-6 text-background bg-teal overflow-auto md:overflow-hidden md:block md:relative md:top-0 md:h-auto md:w-auto md:translate-x-0 md:bg-transparent md:opacity-100 md:transition-none md:text-lightteal',
                  hamburgerMenuIsOpen
                ? "translate-x-0 opacity-100"
                : "translate-x-[-100vw] opacity-0"
            )}
                >
                  <ul ref={ref} className='flex flex-col md:flex-row md:items-center text-md h-full [&_li]:ml-6 md:text-md text-8xl [&_li]:h-[25vh] [&_li]:pt-[20rem] md:[&_li]:pt-[0rem] [&_li]:flex [&_li]:items-center [&_li]:font-sans md:[&_li]:font-sans md:[&_li]:text-md [&_a]:md:transition-colors",
                hamburgerMenuIsOpen && "[&_a]:translate-y-0' > 
                    
                    <motion.li key={slice.id} animate={animation}>
                      <PrismicLink field={slice.primary.link} className='group text-lightteal transition duration-300'>
                        <RichText field={slice.primary.name} />
                        <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-[2px] bg-lightteal group-hover:mt-4 md:group-hover:mt-2 md:duration-300'></span>
                      </PrismicLink>
                    </motion.li>
                    <motion.li animate={subheaderAnimation}>
                      <PrismicLink field={slice.primary.contact_link} className='group text-lightteal transition duration-300'>
                        <span className='md:border-[1px] md:px-5 md:py-2 md:rounded-full md:border-darkteal md:hover:border-opacity-20 transition duration-0 md:hover:duration-300 md:bg-darkteal md:border-opacity-10 md:bg-opacity-20 md:backdrop-blur-[15px] md:hover:border-lightteal'>{slice.primary.Contact_Button}</span>
                        <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-[2px] bg-lightteal group-hover:mt-4 md:group-hover:mt-0 md:h-0'></span>
                      </PrismicLink>
                    </motion.li>
                    
                  </ul>
                </nav>

                <button   className='ml-6 md:hidden'
                  onClick={() => setHamburgerMenuIsOpen((open) => !open)}
                >
                  <span  className='sr-only'>Toggle menu</span>
                  <HamburgerIcon />
                </button>
                </Container>
            )
          })}
      </header>
  )
}