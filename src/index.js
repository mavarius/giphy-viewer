import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Layout from './components/Layout'
import SearchPage from './components/SearchPage'
import ShowOne from './components/ShowOne'

import store from './store'

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={Layout}>
        <IndexRoute component={SearchPage} />
        <Route path='/:id' component={ShowOne} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
