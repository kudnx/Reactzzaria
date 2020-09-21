import React from 'react'
import { Content, H4, H6, OrderInfo, Divider as MaterialDivider } from '../../ui'
import styled from 'styled-components'
import { Typography, Paper, Container, Button } from '@material-ui/core'
import { useAuth } from '../../hooks'
import FooterCheckout from '../checkout/footer-checkout'
import { Link } from 'react-router-dom'
import { HOME } from '../../routes'

function CheckoutSuccess () {
  const { userInfo } = useAuth()

  return (
    <>
      <Content>
        <Header>
          <H4>Prontinho {userInfo.user.firstName}</H4>
          <Typography>
            Seu pedido será entregue no endereço abaixo em até:
          </Typography>

          <H6>
            45 minutos :)
          </H6>
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
        <Button color='secondary' size='large' component={Link} to={HOME}>{'<'} Voltar a página inicial</Button>
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

export default CheckoutSuccess
