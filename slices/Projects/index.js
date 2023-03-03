import React from 'react'
import { motion } from 'framer-motion'
import { PrismicRichText } from '@prismicio/react'
import Container from '@/components/Container'

/**
 * @typedef {import("@prismicio/client").Content.ProjectsSlice} ProjectsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ProjectsSlice>} ProjectsProps
 * @param { ProjectsProps }
 */
const Projects = ({ slice }) => (
  <section className='mt-[-20rem]'>
    <div id='cont' className='mask-rise-radial-gradient'>
    <div className='photobanner flex'>
            {
              slice?.items?.map((item, i) =>
                  <img 
                    src={item.image.url}
                    alt={item.image.alt}
                    className="rounded-2xl w-[640px] h-[400px]"
                    key={i}
                  />
                )
      }
      {
              slice?.items?.map((item, i) =>
                  <img 
                    src={item.image.url}
                    alt={item.image.alt}
                    className="flex-shrink-0 rounded-2xl w-[640px] h-[400px] object-contain"
                    key={i}
                  />
                )
      }
      </div>
      
       
    <style js="true">{`

     @keyframes bannermove {
       0% {
      transform: translate(0, 0);}
      100% {
          transform: translate(-50%, 0);}
        }
`}</style>
      
    </div>
    </section>
)

export default Projects