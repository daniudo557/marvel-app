import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import paths from './paths'
import Home from '../pages/home'
import Comics from '../pages/comics'
import Navbar from '../components/navbar'
import GlobalStyles from '../components/globalStyles'

export default function Routes () {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navbar />
      <GlobalStyles>
        <Route path={paths.home} exact component={Home} />
        <Route path={paths.comics} component={Comics} />
      </GlobalStyles>
    </BrowserRouter>
  )
}
