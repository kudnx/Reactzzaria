import React from 'react'
import styled from 'styled-components'
import { Button, Grid } from '@material-ui/core'
import { useAuth } from '../../hooks'
import logo from '../../images/logo-react-zzaria.svg'

function Login () {
  const { login } = useAuth()

  return (
    <Container>
      <Grid container justify='center' alignItems='center' spacing={8}>
        <Grid item>
          <img style={{ width: '100%' }} src={logo} alt='reactzzaria logo' />
        </Grid>
        <Grid item xs={12} container justify='center'>
          <GitHubButton onClick={login}>
            Entrar com GitHub
          </GitHubButton>
        </Grid>
      </Grid>
    </Container>
  )
}

const Container = styled.div`padding: ${({ theme }) => theme.spacing(3)}px`

const GitHubButton = styled(Button).attrs({
  variant: 'contained',
  fullWidth: true
})`
&& {
  font-size: ${({ theme }) => theme.typography.h5.fontSize};
  max-width: 480px;
  padding: ${({ theme }) => theme.spacing(2)}px;
  text-transform: none;
}`

export default Login
