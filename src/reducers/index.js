import { combineReducers } from 'redux'

import bpReducer from './bpReducer'

export default combineReducers({
  bpState: bpReducer
})
