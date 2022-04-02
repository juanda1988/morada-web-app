import React, { Fragment } from 'react'
import { GlobalStyle } from './globalStyles'
import {Home} from './pages/Home'
import { Hello } from './pages/Home/components/Hello'

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Hello name="Juan" />
      <Home  />
    </Fragment>
  )
}

export default App