import React, { createContext } from 'react'
import Routes from './routes'

export const AppContext = createContext()

const App = () => {
  return (
    <Routes />
  )
}

export default App
