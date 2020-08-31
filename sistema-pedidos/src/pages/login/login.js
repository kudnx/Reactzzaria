import React, { useContext } from 'react'
import styled from 'styled-components'
import { Button, Grid } from '@material-ui/core'
import { AuthContext } from '../../contexts/auth'
import logo from '../../images/logo-react-zzaria.svg'

function Login () {
  const { login } = useContext(AuthContext)

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

const Container = styled.div`padding: 40px`

const GitHubButton = styled(Button).attrs({
  variant: 'contained',
  fullWidth: true
})`&& {
  font-size: 25px;
  max-width: 480px;
  padding: 15px;
  text-transform: none;
}`

export default Login
