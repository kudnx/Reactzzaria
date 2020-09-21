import React, { useState, Fragment } from 'react'
import { Redirect, Link } from 'react-router-dom'
import t from 'prop-types'
import styled from 'styled-components'
import { HOME, CHECKOUT } from '../../routes'
import {
  Footer,
  Content,
  HeaderContent,
  H4
} from '../../ui'
import { Input as MaterialInput, Button } from '@material-ui/core'
import { useOrder } from '../../hooks'

function ChoosePizzaQuantity ({ location }) {
  const [quantity, setQuantity] = useState(1)
  const { addPizzaToOrder } = useOrder()

  if (!location.state) {
    return <Redirect to={HOME} />
  }

  function addPizza () {
    addPizzaToOrder({
      ...location.state,
      quantity
    })
  }

  function handleChange (e) {
    const { value } = e.target

    if (value >= 1) {
      setQuantity(value)
    }
  }

  return (
    <Fragment>
      <Content>
        <HeaderContent>
          <H4>
            Quantas pizzas você gostaria <br />
            de pedir, com esses sabores?
          </H4>
        </HeaderContent>

        <MainContent>
          <Input value={quantity} onChange={handleChange} autoFocus />

          <ButtonAddPizza to={HOME} onClick={addPizza}>
            Adicionar e<br />
            montar outra
          </ButtonAddPizza>
        </MainContent>
      </Content>

      <Footer
        buttons={{
          back: {
            children: 'Mudar Sabores'
          },

          action: {
            to: CHECKOUT,
            onClick: addPizza,
            children: 'Finalizar compra'
          }
        }}
      />
    </Fragment>
  )
}

const Input = styled(MaterialInput).attrs({
  type: 'number'
})`
  && {
    margin-bottom: ${({ theme }) => theme.spacing(3)}px;
  }

  & input {
    font-size: 80px;
    padding: 10px;
    align-items: center;
    width: 150px;
  }
`

ChoosePizzaQuantity.propTypes = {
  location: t.object.isRequired
}

const MainContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.spacing(2)}px;
`

const ButtonAddPizza = styled(Button).attrs({
  color: 'secondary',
  component: Link,
  variant: 'contained'
})`
  && {
    text-align: center;
  }
`

export default ChoosePizzaQuantity
