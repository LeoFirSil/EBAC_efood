import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Cores } from '../../styles'

type bottonSize = {
  size?: 'small' | 'big'
}

export const ButtonContainer = styled.button<bottonSize>`
  background-color: ${(props) =>
    props.size === 'big' ? `${Cores.rosaClaro}` : `${Cores.rosa}`};
  color: ${(props) =>
    props.size === 'big' ? `${Cores.rosa}` : `${Cores.rosaClaro}`};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 83px;
`

export const ButtonLink = styled(Link)<bottonSize>`
  background-color: ${(props) =>
    props.size === 'big' ? `${Cores.rosaClaro}` : `${Cores.rosa}`};
  color: ${(props) =>
    props.size === 'big' ? `${Cores.rosa}` : `${Cores.rosaClaro}`};
  font-size: 14px;
  font-weight: bold;
  padding: ${(props) => (props.size === 'big' ? '4px 84px' : '4px 6px')};
  text-decoration: none;
  white-space: nowrap;
`
