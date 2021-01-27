import React from 'react'
import Img from 'gatsby-image'

export const Image = ({ imageData = {}, heading, ...props }) => {
  const { alt = '', childImageSharp, image, url } = imageData

  const headingAttrs = heading ? { style: { minHeight: "30vh", height: "100%", maxHeight: "30em", minWidth: "100%" }, className: "blur", loading: "eager" } : {}
  
  const attrs = { alt, durationFadeIn: 40, ...headingAttrs, ...props };
  
  if (!!image && !!image.childImageSharp) {
    return (
      <Img fluid={image.childImageSharp.fluid} {...attrs} />
    )
  }

  if (!!childImageSharp) {
    return <Img fluid={childImageSharp.fluid} {...attrs} />
  }

  if (!!image && typeof image === 'string') {
    return <Img fluid={{ src: url }} {...attrs} />
  }
  
  if (!!url && typeof url === 'string') {
    return <Img fluid={{ src: url }} {...attrs} />
  }

  return null
}