import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/auth'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Grid, Card, CardActionArea as MaterialCardActionArea, Typography } from '@material-ui/core'
import pizzaSizes from '../../fake-data/pizzas-sizes'
import { CHOOSE_PIZZA_FLAVOURS } from '../../routes'
import { H3, H4, PizzasGrid, Divider } from '../../ui'
import { singularOrPlural } from '../../utils'

const ChoosePizzaSize = () => {
  const { userInfo } = useContext(AuthContext)

  return (
    <>
      <Grid container direction='column' alignItems='center'>
        <H3>
          O que vai ser hoje {userInfo.user.firstName}?
        </H3>

        <H4 gutterBottom>
          Escolha o tamanho da pizza:
        </H4>
      </Grid>

      <PizzasGrid>
        {pizzaSizes.map((pizza) => (
          <Grid item key={pizza.id} xs>
            <Card>
              <CardActionArea to={{
                pathname: CHOOSE_PIZZA_FLAVOURS,
                state: pizza
              }}>
                <Pizza><PizzaText>{pizza.size}cm</PizzaText></Pizza>

                <Divider />

                <Typography variant='h5'>{pizza.name}</Typography>
                <Typography>
                  {pizza.slices} fatias, {' '}
                  {pizza.flavours} {' '}
                  {singularOrPlural(pizza.flavours, 'sabor', 'sabores')}
                </Typography>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </PizzasGrid>
    </>
  )
}

const CardActionArea = styled(MaterialCardActionArea).attrs({
  component: Link
})`
  min-width: 250px;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 20px 0;
`

const Pizza = styled.div`
  border: 1px solid #ccc;
  background: #fff;
  border-radius: 50%;
  height: 200px;
  width: 200px;
  align-items: center;
  display: flex;
  position: relative;
  justify-content: center;
  z-index: 1;

  &::before,
  &::after {
    background: #ccc;
    content: '';
    position: absolute;
    transform: rotate(45deg);
  }

  &::before {
    height: 1px;
    width: 160px;
  }

  &::after {
    height: 160px;
    width: 1px;
  }
`

const PizzaText = styled(Typography).attrs({
  variant: 'h5'
})`
  background: #fff;
  border-radius: 50%;
  height: 80px;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
`

export default ChoosePizzaSize
