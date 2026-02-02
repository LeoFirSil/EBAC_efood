import styled from 'styled-components'
import { Cores } from '../../styles'

export const HeaderBar = styled.header`
  display: flex;
  justify-content: space-between;
  position: relative;

  img {
    padding-top: 60px;
  }
`
export const Testos = styled.h2`
  color: ${Cores.rosa};
  padding-top: 80px;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
`
export const Carrinho = styled.button`
  color: ${Cores.rosa};
  background: transparent;
  border: none;
  margin-top: 80px;
  padding: 4px 4px;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
`

export const Perfil = styled.div`
  width: 100%;
  height: 185px;
  display: block;
  background-size: cover;
`
