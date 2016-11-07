import { React, Component } from 'react'
// import DumbComponent from './DumbComponent'

import { connect } from 'react-redux'

import * as BpActions from '../actions/BpActions'

class SmartComponent extends Component {
  render () {
    let { bpState, bpAction } = this.props

    return (
      <div className="container">
        <h1 className="appTitle">React/Redux</h1>
        {/* <DumbComponent /> */}
      </div>
    )
  }
}

let mapStateToProps = state => ({
  bpState: state.bpState
})

let mapDispatchToProps = dispatch => ({
  bpAction () {
    dispatch(BpActions.bpAction())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SmartComponent)
