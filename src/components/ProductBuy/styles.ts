import styled from 'styled-components'
import { Cores } from '../../styles'

export const Card = styled.div`
  background-color: ${Cores.rosa};
  display: flex;
  flex-direction: column;
  height: 100%;

  img {
    display: block;
    width: 95%;
    height: 200px;
    object-fit: cover;
    margin: 8px 8px 0 8px;
  }
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: ${Cores.branco};
  display: block;
  margin-bottom: 16px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  width: 300px;
  display: block;
  margin: 16px 0;
  color: ${Cores.branco};
  white-space: pre-line;
`

export const Content = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  flex: 1;

  button {
    font-size: 14px;
    font-weight: bold;
    background-color: ${Cores.rosaClaro};
    color: ${Cores.rosa};
    padding: 4px 0;
    width: 100%;
    border: none;
    margin-top: auto;
  }
`
