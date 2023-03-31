import React from 'react'
import RichText from '@/components/RichText'

/**
 * @typedef {import("@prismicio/client").Content.FieldsSlice} FieldsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FieldsSlice>} FieldsProps
 * @param { FieldsProps }
 */
const Fields = ({ slice }) => (
  <section>
    <RichText field={slice.primary.title_page} />
    <RichText field={slice.primary.description} />

  </section>
)

export default Fields