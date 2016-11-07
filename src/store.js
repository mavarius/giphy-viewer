import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import promise from 'redux-promise-middleware'

import { loadState, saveState } from './localStorage'

let middlewares = [logger(), promise()]

const store = createStore(reducers, loadState(), composeWithDevTools(applyMiddleware(...middlewares)))

store.subscribe(() => {
  saveState(store.getState())
})

export default store
