import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import RichText from '@/components/RichText'
import Container from '@/components/Container'
import classNames from 'classnames'


/**
 * @typedef {import("@prismicio/client").Content.WhatIOfferSlice} WhatIOfferSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<WhatIOfferSlice>} WhatIOfferProps
 * @param { WhatIOfferProps }
 */
const WhatIOffer = ({ slice }) => (
  <section className='w-full py-[20rem]'>
    <Container>
      <div className='text-center justify-center'>
        <RichText field={slice.primary.title_section} className="text-6xl font-bold uppercase text-lightteal mb-4 "/>
        <RichText className="text-lg mt-2 text-mediumteal max-w-[560px] m-auto" field={slice.primary.section_description}/>
      </div>

      <div className='items-center'>
       <img
          src='/design.svg'
          className="mask-linear-gradient mt-14 overflow-hidden mx-auto"
        />
      </div>
      
      <div className='mt-14 grid grid-cols-1 sm:grid-cols-3 gap-x-8 items-start place-items-center'>
            {slice?.items?.map((item, i) => (
              <div key={i}>
                <span className='text-lightteal'>{item.numbers}</span>
                <RichText field={item.title_points} className="text-lg  text-lightteal max-w-xs" />
                
                <RichText field={item.key_description} className="text-sm max-w-[27rem] mt-3" />
                
              </div>
            ))}
        </div>
        
    </Container>
  </section>
)

export default WhatIOffer