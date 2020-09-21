import React from 'react'
import { Content, H4, H6, OrderInfo, Divider as MaterialDivider } from '../../ui'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Typography, Paper, Container, Button } from '@material-ui/core'
import { useAuth, useOrder } from '../../hooks'
import FooterCheckout from '../checkout/footer-checkout'
import { CHECKOUT_SUCCESS } from '../../routes'

function CheckoutConfirmation () {
  const { userInfo } = useAuth()
  const { sendOrder } = useOrder()

  return (
    <>
      <Content>
        <Header>
          <H4>Olá {userInfo.user.firstName}</H4>
          <Typography>
            Confira os seus dados antes de finalizar o pedido.
          </Typography>
        </Header>

        <Container max-Width='sm'>
          <PaperContainer>
            <H6>
              Seu pedido é:
            </H6>
            <OrderInfo />

            <Divider />

            <H6>Endereço de entrega:</H6>
            <Typography>
              Rua tao shfblsbdfklbsdlfbsjdfhd
            </Typography>

            <Divider />

            <H6>Telefone:</H6>
            <Typography>
              asdasdadasdasd
            </Typography>
          </PaperContainer>
        </Container>
      </Content>

      <FooterCheckout justifyContent='center'>
        <Button variant='contained' color='primary' size='large'
          component={Link}
          to={CHECKOUT_SUCCESS}
          onClick={sendOrder}
        >Tudo certo!</Button>
      </FooterCheckout>
    </>
  )
}

const Divider = styled(MaterialDivider)`
  && {
    margin: ${({ theme }) => theme.spacing(3, 0)};
  }
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-botton: ${({ theme }) => theme.spacing(3)}px;
`

const PaperContainer = styled(Paper)`
  && {
    padding: ${({ theme }) => theme.spacing(3)}px;
  }
`

export default CheckoutConfirmation
