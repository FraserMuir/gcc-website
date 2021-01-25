import React from 'react'
import Img from 'gatsby-image'

export const Image = ({ imageData = {}, ...props }) => {
  const { alt = '', childImageSharp, image, url } = imageData

  if (!!image && !!image.childImageSharp) {
    return (
      <Img fluid={image.childImageSharp.fluid} alt={alt} {...props} />
    )
  }

  if (!!childImageSharp) {
    return <Img fluid={childImageSharp.fluid} alt={alt} {...props} />
  }

  if (!!image && typeof image === 'string') {
    return <Img fluid={{ src: url }} alt={alt} {...props} />
  }
  
  if (!!url && typeof url === 'string') {
    return <Img fluid={{ src: url }} alt={alt} {...props} />
  }

  return null
}