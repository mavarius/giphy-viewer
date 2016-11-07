import { combineReducers } from 'redux'

import gifReducer from './gifReducer'
import oneGifReducer from './oneGifReducer'

export default combineReducers({
  gifState: gifReducer,
  oneGif: oneGifReducer
})
