import React from 'react'
import { Content, H4, H6, OrderInfo, Divider as MaterialDivider } from '../../ui'
import styled from 'styled-components'
import { Typography, Paper, Container, Button } from '@material-ui/core'
import { useAuth, useOrder } from '../../hooks'
import FooterCheckout from '../checkout/footer-checkout'
import { Link } from 'react-router-dom'
import { HOME } from '../../routes'

function CheckoutSuccess () {
  const { userInfo } = useAuth()
  const { order } = useOrder()

  return (
    <>
      <Content>
        <Header>
          <H4>Prontinho {userInfo.user.firstName}!</H4>

          <Typography>
            Seu pedido será entregue no endereço abaixo em até
          </Typography>

          <H6>
            40 minutos =)
          </H6>
        </Header>

        <Container maxWidth='sm'>
          <PaperContainer>
            <H6>Seu pedido:</H6>
            <OrderInfo />

            <Divider />

            <H6>Endereço para entrega:</H6>
            <Typography>
              {order.address.address},
              {' n'} {order.address.number},
              {' '} {order.address.complement}<br />
              Bairro: {order.address.district}<br />
              CEP: {order.address.code}<br />
              {order.address.city}/{order.address.state}
            </Typography>

            <Divider />

            <H6>Telefone para contato:</H6>
            <Typography>
              {order.phone}
            </Typography>
          </PaperContainer>
        </Container>
      </Content>

      <FooterCheckout justifyContent='center'>
        <Button
          color='secondary'
          size='large'
          component={Link}
          to={HOME}
        >
          {'<'} Voltar para a Página Inicial
        </Button>
      </FooterCheckout>
    </>
  )
}

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing(3)}px;
  text-align: center;
`

const PaperContainer = styled(Paper)`
  && {
    padding: ${({ theme }) => theme.spacing(3)}px;
  }
`

const Divider = styled(MaterialDivider)`
  && {
    margin: ${({ theme }) => theme.spacing(3, 0)};
  }
`

export default CheckoutSuccess
