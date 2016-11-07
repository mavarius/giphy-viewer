import React from 'react'
import { browserHistory } from 'react-router'

const handleGetOne = (id) => {
  browserHistory.push(`/${id}`)
}

const renderMessages = (results) => {
  const searchList = results.map(result => {
    const theGif = result.images.fixed_height_small
    return (
      <div className="result" key={result.id}>
        <img onClick={() => handleGetOne(result.id)} src={theGif.url} alt=""/>
      </div>
    )
  })

  return searchList
}

const SearchResults = ( gifState ) => {

  return(
    <div>
      {gifState.gifState ? renderMessages(gifState.gifState) : <div>no results...</div>}
    </div>
  )
}


export default SearchResults
