import React from 'react'
import { IndexPageTemplate } from '../../templates/index'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  if (data) {
    return (
      <IndexPageTemplate
        image={getAsset(data.image)}
        title={data.title}
        main={data.main}
        preview
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

export default IndexPagePreview
