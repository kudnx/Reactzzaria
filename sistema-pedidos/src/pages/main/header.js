import React from 'react'
import t from 'prop-types'
import HeaderCommon from './header-common'
import styled from 'styled-components'
import { Route, Switch } from 'react-router-dom'
import HeaderCheckout from './header-checkout'
import { CHECKOUT } from '../../routes'
import { AppBar, Toolbar as MaterialToolbar } from '@material-ui/core'

const Header = ({ location }) => {
  return (
    <AppBar>
      <Toolbar>
        <Switch>
          <Route path={CHECKOUT} component={HeaderCheckout} />
          <Route component={HeaderCommon} />
        </Switch>
      </Toolbar>
    </AppBar>
  )
}

Header.propTypes = {
  location: t.object.isRequired
}

const Toolbar = styled(MaterialToolbar)`
  &&{
    margin: 0 auto;
    max-width: ${({ theme }) => theme.breakpoints.values.lg}px;
    width: 100%;
  }
`

export default Header
