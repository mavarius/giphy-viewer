import React, { Component } from 'react'
import { connect } from 'react-redux'

import SearchBar from './SearchBar'
import SearchResults from './SearchResults'

import * as GifActions from '../actions/GifActions'

class SearchPage extends Component {
  render () {
    let { gifState, searchAction, getOne } = this.props

    return (
      <div className="container">
        <SearchBar search={searchAction} />
        <SearchResults gifState={gifState} />
      </div>
    )
  }
}

let mapStateToProps = state => ({
  gifState: state.gifState
})

let mapDispatchToProps = dispatch => ({
  searchAction (searchEntry, filter) {
    dispatch(GifActions.searchAction(searchEntry, filter))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)
