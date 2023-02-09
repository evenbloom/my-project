import { PrismicLink, PrismicText } from '@prismicio/react'
import Container from './Container'
import { useEffect, useState } from "react";
import { HamburgerIcon } from './icons/Hamburger'
import Link from 'next/link'
import classNames from 'classnames';

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
  
  return (
    <header className='fixed z-10 left-0 right-0 top-0 w-full backdrop-blur-[12px]'>
          {/* Renders top-level links. */}
          {navigation.data.slices.map((slice) => {
            return (
              <Container className="flex h-navigation-height ml-auto items-center justify-between">
                <Link href="/" className='flex items-center'>  
                  <img
                    src='/logo.svg'
                    className='w-14 mr-4'
                  />
                </Link> 
                <nav
                  className={classNames(
                  'h-[100vh] transition-opacity duration-500 fixed -z-10 top-0  left-0 w-full pr-6 text-background bg-teal overflow-auto md:overflow-hidden md:block md:relative md:top-0 md:h-auto md:w-auto md:translate-x-0 md:bg-transparent md:opacity-100 md:transition-none md:text-teal',
                  hamburgerMenuIsOpen
                ? "translate-x-0 opacity-100"
                : "translate-x-[-100vw] opacity-0"
            )}
                >
                  <ul className='flex flex-col md:flex-row md:items-center text-md h-full [&_li]:ml-6 [&_li]:text-8xl [&_li]:px-[1rem] [&_li]:h-[25vh] [&_li]:flex [&_li]:items-center [&_li]:font-map md:[&_li]:font-sans md:[&_li]:text-md [&_a]:md:transition-colors [&_a:hover]:text-grey",
                hamburgerMenuIsOpen && "[&_a]:translate-y-0' > 
                    <li key={slice.id}>
                      <PrismicLink field={slice.primary.link}>
                        <PrismicText field={slice.primary.name} />
                      </PrismicLink>
                    </li>
                  </ul>
                </nav>

                <button className='ml-6 md:hidden'
                  onClick={() => setHamburgerMenuIsOpen((open) => !open)}
                >
                  <span className='sr-only'>Toggle menu</span>
                  <HamburgerIcon />
                </button>
                </Container>
            )
          })}
          
      </header>
  )
}