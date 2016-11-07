import React, { Component } from 'react'
import { connect } from 'react-redux'

import SearchBar from './SearchBar'
import SearchResults from './SearchResults'

import * as GifActions from '../actions/GifActions'

class ShowOne extends Component {
  componentWillMount () {
    this.props.getOne(this.props.params.id)
  }

  render () {
    let { oneGif } = this.props
    return (
      <div className="container">
        <img src={oneGif.images.downsized_large.url} alt=""/>
        <p>rating: {oneGif.rating}</p>
        <p>slug: {oneGif.slug}</p>
        <p>Source: <a href={oneGif.source}>{oneGif.source}</a></p>
      </div>
    )
  }
}

let mapStateToProps = state => ({
  oneGif: state.oneGif
})

let mapDispatchToProps = dispatch => ({
  getOne (id) {
    dispatch(GifActions.getOne(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowOne)
