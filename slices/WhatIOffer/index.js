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
  <section className='section h-[100vh]'>
    <Container>
      <div className='relative text-center justify-center'>
        <RichText field={slice.primary.title_section} className="text-6xl font-bold uppercase text-lightteal mb-4 "/>
        <RichText className="text-lg mt-2 text-mediumteal max-w-[560px] m-auto" field={slice.primary.section_description}/>
      </div>

      <div>
       <img
          src='/design.svg'
          className="mask-rise-radial-gradient mt-14 overflow-hidden"
        />
      </div>
      <div className='mt-10'>
        <div className='grid grid-cols-3 '>
            {
              slice?.items?.map((item, i) =>
                <span className='text-lightteal'>{ item.numbers }</span>
              )
            }

            {
              slice?.items?.map((item, i) =>
                <RichText field={item.title_points} className="text-lg mt-1 text-lightteal" />
              )
            }

            {
              slice?.items?.map((item, i) =>
                <RichText field={item.key_description} className="text-xs" />
              )
              }
          </div>
      </div>
    </Container>
  </section>
)

export default WhatIOffer