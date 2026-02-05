import styled from 'styled-components'
import { Cores } from '../../styles'

export const FooterContainer = styled.div`
  background-color: ${Cores.rosaClaro};
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    margin-top: 40px;
  }
`

export const LinkMidia = styled.ul`
  display: flex;
  margin-top: 30px;

  li {
    margin-right: 8px;
    list-style-type: none;
  }
`

export const Testo = styled.h4`
  color: ${Cores.rosa};
  width: 485px;
  font-size: 10px;
  text-align: center;
  padding-top: 80px;
  padding-bottom: 40px;
`
