import React, { Fragment } from 'react'
import { SampleContext} from './contexts/SampleContext'
import { GlobalStyle } from './globalStyles'
import { Navigation } from './Navigation'
import { Hello } from './pages/Home/components/Hello'
import { UserContextStore } from "./contexts/UserContext";
import { BrowserRouter } from 'react-router-dom'

export const App = () => {
  return (
    <BrowserRouter>
      <SampleContext.Provider value = {'Juan'}>
        <UserContextStore>
          <GlobalStyle />
          <Hello name = "Juan" />
          <Navigation />
        </UserContextStore>
      </SampleContext.Provider>
    </BrowserRouter>
  )
}

export default App