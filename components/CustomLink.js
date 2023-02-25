import { PrismicLink } from "@prismicio/react";

const CustomLink = ({ link, text, className,image }) => {
  return (
    <PrismicLink field={link}>
      <div className={className}>
        {image && <img src={image.url} alt={image.alt} />}
        {text}
      </div>
    </PrismicLink>
  )
}

export default CustomLink