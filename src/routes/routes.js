import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import paths from './paths'
import Home from '../pages/home'
import Characters from '../pages/characters'
import Comics from '../pages/comics'
import List from '../pages/list'
import Navbar from '../components/navbar'

export default function Routes () {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Route path={paths.home} exact component={Home} />
      <Route path={paths.comics} component={Comics} />
      <Route path={paths.characters} component={Characters} />
      <Route path={paths.list} component={List} />
    </BrowserRouter>
  )
}
