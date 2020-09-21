import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks'
import { AccountCircle } from '@material-ui/icons'
import { HOME } from '../../routes'
import logo from '../../images/logo-react-zzaria.svg'
import { IconButton, Typography, Menu, MenuItem } from '@material-ui/core'

function HeaderCommon () {
  const { userInfo, logout } = useAuth()
  const [anchorElement, setAnchorElement] = useState(null)

  const handleOpenMenu = (e) => {
    setAnchorElement(e.target)
  }

  const handleClose = () => {
    setAnchorElement(null)
  }

  return (
    <>
      <LogoContainer>
        <Link to={HOME}>
          <img style={{ width: '30%' }} src={logo} alt='reactzzaria logo' />
        </Link>
      </LogoContainer>
      <Typography color='inherit'>Olá {userInfo.user.firstName}</Typography>
      <IconButton color='inherit' onClick={handleOpenMenu}>
        <AccountCircle />
      </IconButton>
      <Menu open={!!anchorElement} onClose={handleClose} anchorEl={anchorElement}>
        <MenuItem onClick={logout} open>Sair</MenuItem>
      </Menu>
    </>
  )
}

const LogoContainer = styled.div`
  flex-grow: 1;
`

export default HeaderCommon
