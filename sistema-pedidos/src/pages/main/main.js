import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { AppBar, Grid, Toolbar as MaterialToolbar, IconButton, Typography, Menu, MenuItem, withStyles } from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'
import logo from '../../images/logo-react-zzaria.svg'
import { AuthContext } from '../../contexts/auth'
import t from 'prop-types'

const Main = () => {
  const [anchorElement, setAnchorElement] = useState(null)
  const { userInfo, logout } = useContext(AuthContext)
  const userName = userInfo.user.displayName.split(' ')[0]

  const handleOpenMenu = (e) => {
    setAnchorElement(e.target)
  }

  const handleClose = () => {
    setAnchorElement(null)
  }

  return (
    <>
      <AppBar>
        <Toolbar>
          <LogoContainer>
            <img style={{ width: '30%' }} src={logo} alt='reactzzaria logo' />
          </LogoContainer>
          <Typography color='inherit'>Olá {userName}</Typography>
          <IconButton color='inherit' onClick={handleOpenMenu}>
            <AccountCircle />
          </IconButton>
          <Menu open={!!anchorElement} onClose={handleClose} anchorEl={anchorElement}>
            <MenuItem onClick={logout} open>Sair</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      <Spacer />

      <Content>
        <Grid container justify='center'>
          <Grid item>
            <Typography variant='h4'>
              O que vai ser hoje {userName}?
            </Typography>
          </Grid>
        </Grid>
      </Content>
    </>
  )
}

const Toolbar = styled(MaterialToolbar)`
  margin: 0 auto;
  max-width: 960px;
  width: 100%;
`

const LogoContainer = styled.div`
  flex-grow: 1;
`

const Content = styled.main`
  padding: 20px;
`

const style = (theme) => {
  return {
    main: theme.mixins.toolbar
  }
}

const SpacerWrapper = ({ classes }) => (
  <div className={classes.main} />
)

SpacerWrapper.propTypes = {
  classes: t.object
}

const Spacer = withStyles(style)(SpacerWrapper)

export default Main
