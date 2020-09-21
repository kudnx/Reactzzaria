import styled from 'styled-components'
import { Divider as MaterialDivider } from '@material-ui/core'

const Divider = styled(MaterialDivider)`
  &&{
    margin: ${({ theme }) => theme.spacing(3, 0)}px;
    witdh: 100%;
  }
`

export default Divider
