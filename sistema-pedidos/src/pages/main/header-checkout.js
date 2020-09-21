import React from 'react'
import styled from 'styled-components'
import logo from '../../images/logo-react-zzaria.svg'

function HeaderCheckout () {
  return (
    <LogoContainer>
      <img style={{ width: '30%' }} src={logo} alt='reactzzaria logo' />
    </LogoContainer>
  )
}

const LogoContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
`

export default HeaderCheckout
