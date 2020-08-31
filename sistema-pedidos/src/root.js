import React from 'react'
import { hot } from 'react-hot-loader'
import { CssBaseline, createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import { BrowserRouter, Route } from 'react-router-dom'
import AuthProvider from './contexts/auth'
import App from './app'

const theme = createMuiTheme({
  Typography: {
    useNextVariants: true
  }
})

const Root = () => (
  <MuiThemeProvider theme={theme}>
    <AuthProvider>
      <CssBaseline />
      <BrowserRouter>
        <Route component={App} />
      </BrowserRouter>
    </AuthProvider>
  </MuiThemeProvider>
)

export default hot(module)(Root)
