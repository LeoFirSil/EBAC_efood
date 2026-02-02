import styled from 'styled-components'
import { Cores } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${Cores.rosa};
  color: ${Cores.rosaClaro};
  font-size: 12px;
  font-weight: bold;
  padding: ${(props) => (props.size === 'big' ? '6px 10px' : '6px 4px')};
  display: inline-block;
`
