import React, { Fragment } from 'react'
import { GlobalStyle } from './globalStyles'
import { Navigation } from './Navigation'
import { Home } from './pages/Home'
import { Hello } from './pages/Home/components/Hello'

export const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Hello name="Juan" />
      <Navigation />
    </Fragment>
  )
}

export default App