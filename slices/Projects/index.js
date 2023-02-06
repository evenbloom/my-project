import React from 'react'
import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.ProjectsSlice} ProjectsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ProjectsSlice>} ProjectsProps
 * @param { ProjectsProps }
 */
const Projects = ({ slice }) => (
  <section className='flex overflow-x-scroll motion-safe:overflow-x-hidden'>
    
      <div className='relative'>
          <div className='flex items-center animate-marquee -translate-x-full gap-8'>
            {
              slice?.items?.map((item, i) =>
                <img src={item.image.url}
                  alt={item.image.alt}
                  className="flex-shrink-0 rounded-2xl"
                  key={i}
                  />
              )
        }
        {
        slice?.items?.map((item, i) =>
          <img src={item.image.url}
            alt={item.image.alt} 
            className="flex-shrink-0 rounded-2xl"
            key={i + slice?.items?.length}
            />
        )
      }
          </div>
          <style js>{`
      .animate-marquee {
        animation: marquee 20s linear infinite;
        width: fit-content;
      }
      @keyframes marquee {
        0% { transform: translateX(0%); }
        100% { transform: translateX(-133%); }
      }
    `}</style>
        
      </div>
    
     </section>
)

export default Projects