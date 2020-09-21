import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { CardActionArea } from '@material-ui/core'

const CardLink = styled(CardActionArea).attrs({
  component: Link
})`
  &&{
    min-width: 250px;
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: ${({ theme }) => theme.spacing(3, 0)}px;
  }
`

export default CardLink
