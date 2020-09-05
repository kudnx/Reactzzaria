import React from 'react'
import t from 'prop-types'
import styled from 'styled-components'
import { H3, HeaderContent, PizzasGrid, Divider } from '../../ui'
import { singularOrPlural } from '../../utils'
import { Redirect } from 'react-router-dom'
import { HOME } from '../../routes'
import pizzasFlavours from '../../fake-data/pizzas-flavours'
import { Card, Grid, Typography } from '@material-ui/core'

const ChoosePizzaFlavours = ({ location }) => {
  if (!location.state) {
    return <Redirect to={HOME} />
  }

  const { flavours, id } = location.state

  return (
    <>
      <HeaderContent>
        <H3 gutterBottom>
          Escolha até { flavours } {' '}
          {singularOrPlural(flavours, 'sabor', 'sabores')}:
        </H3>
      </HeaderContent>

      <PizzasGrid>
        {pizzasFlavours.map((pizza) => (
          <Grid item key={pizza.id} xs>
            <Card>
              <Img src={pizza.image} alt={pizza.name} />

              <Divider />

              <Typography>{pizza.name}</Typography>
              <Typography variant='h5'>{pizza.value[id]}</Typography>
            </Card>
          </Grid>
        ))}
      </PizzasGrid>
    </>
  )
}

ChoosePizzaFlavours.propTypes = {
  location: t.object.isRequired
}

const Img = styled.img`
  width: 200px;
`

export default ChoosePizzaFlavours
