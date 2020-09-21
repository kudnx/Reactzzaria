import React from 'react'
import { Content, Title as UiTitle, OrderInfo } from '../../ui'
import { Grid, Paper, Button } from '@material-ui/core'
import styled from 'styled-components'
import { Link, Redirect } from 'react-router-dom'
import FooterCheckout from './footer-checkout'
import { CHECKOUT_CONFIRMATION, HOME } from '../../routes'
import { useOrder } from '../../hooks'
import FormAddress from './form-address'
import TextField from './text-field'

function Checkout () {
  const { order } = useOrder()

  if (!order.pizzas.length) {
    return <Redirect to={HOME} />
  }

  return (
    <>
      <Content>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Title>Qual o endereço para entrega?</Title>
            <PaperContainer>
              <FormAddress />
            </PaperContainer>

            <Title>Qual o seu telefone?</Title>
            <PaperContainer>
              <TextField label='Telefone' xs={4} />
            </PaperContainer>
          </Grid>

          <Grid container direction='column' item xs={12} md={6}>
            <Title>Informações do seu pedido:</Title>
            <PaperContainer>
              <OrderInfo showOptions />
            </PaperContainer>
          </Grid>
        </Grid>
      </Content>

      <FooterCheckout>
        <Button variant='contained' color='primary' component={Link} to={CHECKOUT_CONFIRMATION} >Confirmar pedido</Button>
      </FooterCheckout>
    </>
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
