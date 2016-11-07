import React, { Component } from 'react'
// import SmartComponent from './SmartComponent'

export default class Layout extends Component {
  render () {
    console.log('React: ', React)
    return (
      <div className="container">
        <h1 className="appTitle">React/Redux</h1>
        {/* <SmartComponent /> */}
      </div>
    )
  }
}
