import React, { useState, useContext } from 'react'
import { AppBar, IconButton, Typography, Menu, MenuItem, Toolbar as MaterialToolbar } from '@material-ui/core'
import { AuthContext } from '../../contexts/auth'
import { AccountCircle } from '@material-ui/icons'
import logo from '../../images/logo-react-zzaria.svg'
import styled from 'styled-components'

const Header = () => {
  const { userInfo, logout } = useContext(AuthContext)
  const [anchorElement, setAnchorElement] = useState(null)

  const handleOpenMenu = (e) => {
    setAnchorElement(e.target)
  }

  const handleClose = () => {
    setAnchorElement(null)
  }

  return (
    <AppBar>
      <Toolbar>
        <LogoContainer>
          <img style={{ width: '30%' }} src={logo} alt='reactzzaria logo' />
        </LogoContainer>
        <Typography color='inherit'>Olá {userInfo.user.firstName}</Typography>
        <IconButton color='inherit' onClick={handleOpenMenu}>
          <AccountCircle />
        </IconButton>
        <Menu open={!!anchorElement} onClose={handleClose} anchorEl={anchorElement}>
          <MenuItem onClick={logout} open>Sair</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
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

export default Header
