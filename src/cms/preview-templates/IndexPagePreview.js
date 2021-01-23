import React from 'react'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <IndexPageTemplate
        image={getAsset(data.image)}
        title={data.title}
        content={data.content}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

export default IndexPagePreview
