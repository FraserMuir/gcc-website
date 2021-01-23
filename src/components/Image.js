import React from 'react'
import Img from 'gatsby-image'

export const Image = ({ imageData, ...props }) => {
  const { alt = '', childImageSharp, image } = imageData

  if (!!image && !!image.childImageSharp) {
    return (
      <Img fluid={image.childImageSharp.fluid} alt={alt} {...props} />
    )
  }

  if (!!childImageSharp) {
    return <Img fluid={childImageSharp.fluid} alt={alt} {...props} />
  }

  if (!!image && typeof image === 'string')
    return <img src={image} alt={alt} {...props} />

  return null
}