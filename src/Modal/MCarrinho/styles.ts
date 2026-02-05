import styled from 'styled-components'
import { Cores } from '../../styles'

export const Texto = styled.h3`
  color: ${Cores.rosaClaro};
  font-size: 14px;
  font-weight: 700;
  width: 100%;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
`

export const FotoComida = styled.img`
  margin-right: 8px;
`

export const Lista = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
`
export const Card = styled.li`
  background-color: ${Cores.rosaClaro};
  color: ${Cores.rosa};
  display: flex;

  justify-content: space-between;
  width: 344px;
  height: 100px;
  padding: 8px;
  gap: 8px;

  h2 {
    font-size: 18px;
    font-weight: bold;
  }

  h3 {
    color: ${Cores.rosa};
    font-size: 14px;
    font-weight: 400;
    margin-top: 16px;
  }
`

export const Conteudo = styled.div`
  display: flex;
`

export const Lixeira = styled.img`
  height: 16px;
  width: 16px;
  cursor: pointer;
  align-self: flex-end;
`
