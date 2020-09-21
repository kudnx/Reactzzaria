import React from 'react'
import t from 'prop-types'
import { Content, Title as UiTitle, OrderInfo } from '../../ui'
import { Grid, Paper, TextField as MaterialTextField, Button } from '@material-ui/core'
import styled from 'styled-components'
import { CHECKOUT_CONFIRMATION } from '../../routes'
import { Link } from 'react-router-dom'
import FooterCheckout from './footer-checkout'

function Checkout () {
  return (
    <>
      <Content>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Title>Qual o endereço para entrega?</Title>
            <PaperContainer>
              <Grid container spacing={2} >
                <label>CEP<TextField xs={4} autoFocus /></label>

                <Grid item xs={8} />

                <label>Rua<TextField xs={9} /></label>

                <label>Número<TextField xs={3} /></label>

                <label>Complemento<TextField xs={12} /></label>

                <label>Cidade<TextField xs={9} /></label>

                <label>Estado<TextField xs={3} /></label>
              </Grid>
            </PaperContainer>

            <Title>Qual o seu telefone?</Title>
            <PaperContainer>
              <TextField label='Telefone' xs={4} />
            </PaperContainer>
          </Grid>

          <Grid container direction='column' item xs={12} md={6}>
            <Title>Informações do seu pedido:</Title>
            <PaperContainer>
              <OrderInfo />
            </PaperContainer>
          </Grid>
        </Grid>
      </Content>

      <FooterCheckout>
        <Button variant='contained' color='primary' component={Link} to={CHECKOUT_CONFIRMATION} >Confirmar dados</Button>
      </FooterCheckout>
    </>
  )
}

TextField.propTypes = {
  autoFocus: t.bool,
  xs: t.number
}

function TextField (xs, autoFocus, ...props) {
  return (
    <Grid item xs={xs}>
      <MaterialTextField
        variant='outlined'
        inputProps={{
          autoFocus
        }}
        FullWidth {...props} />
    </Grid>
  )
}

const Title = styled(UiTitle).attrs({
  variant: 'h6'
})`
  && {
    text-align: left
  }
`

const PaperContainer = styled(Paper)`
  && {
    margin-botton: ${({ theme }) => theme.spacing(5)}px;
    padding: ${({ theme }) => theme.spacing(2)}px;
    flex-grow: 1;
  }
`

export default Checkout
