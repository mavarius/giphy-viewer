import React from 'react'

const handleSearch = (e, search) => {
  e.preventDefault()
  const { searchTerm, rating } = e.target

  const searchEntry = searchTerm.value.replace(' ', '+')

  const searchRating = rating.value

  search(searchEntry, searchRating)
}

const renderSearchBar = (search) => (
  <div className="searchBar">
    <form onSubmit={e => handleSearch(e, search)}>
      <div className="searchBlock">
        <input id="searchTerm" type="text" placeholder="search" required />
        <select id="rating" defaultValue={null}>
          <option value="y">Y</option>
          <option value="g">G</option>
          <option value="pg">PG</option>
          <option value="pg-13">PG-13</option>
          <option value="r">R</option>
        </select>
        <button className="searchBtn"><i className="fa fa-search" aria-hidden="true" /></button>
      </div>
    </form>
  </div>
)

const SearchBar = search => (
  renderSearchBar(search.search)
)

export default SearchBar
