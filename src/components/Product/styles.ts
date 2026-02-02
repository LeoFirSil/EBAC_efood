import styled from 'styled-components'
import { Cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${Cores.branco};
  border: 1px solid ${Cores.rosa};
  position: relative;

  ${TagContainer} {
    margin-left: 8px;
  }
`

export const Titulo = styled.h3`
  color: ${Cores.rosa};
  font-size: 18px;
  font-weight: bold;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin: 16px 0;
  color: ${Cores.rosa};
  white-space: pre-line;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const TituloNota = styled.div`
  display: flex;
  justify-content: space-between;

  h4 {
    color: ${Cores.rosa};
    font-size: 20px;
    font-weight: bold;
`

export const Nota = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-left: 8px;
  }
`

export const Content = styled.div`
  padding: 8px;
`
