import styled from 'styled-components'
import { Grid } from '@material-ui/core'

const PizzasGrid = styled(Grid).attrs({
  container: true,
  spacing: 8
})`
  &&{
    padding: ${({ theme }) => theme.spacing(3)}px;
  }
`

export default PizzasGrid
