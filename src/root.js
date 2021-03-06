import React from 'react'
import { Provider } from 'react-redux'
import Route from './routes'

import { store } from './redux/store'

const Root = () => (
  <Provider store={store}>
    <Route />
  </Provider>
)

export default Root
