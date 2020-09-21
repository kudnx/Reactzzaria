import React from 'react'
import { hot } from 'react-hot-loader'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { CssBaseline, createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import { BrowserRouter, Route } from 'react-router-dom'
import { AuthProvider, OrderProvider } from './contexts'
import App from './app'

const theme = createMuiTheme({
  Typography: {
    useNextVariants: true
  }
})

const Root = () => (
  <MuiThemeProvider theme={theme}>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <OrderProvider>
          <CssBaseline />
          <GlobalStyle />
          <BrowserRouter>
            <Route component={App} />
          </BrowserRouter>
        </OrderProvider>
      </AuthProvider>
    </ThemeProvider>
  </MuiThemeProvider>
)

const GlobalStyle = createGlobalStyle`
  #root{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`

export default hot(module)(Root)
