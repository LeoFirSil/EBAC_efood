import styled from 'styled-components'
import { Cores } from '../../styles'

export const DuasEntradas = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
`

export const Titulo = styled.h2`
  color: ${Cores.rosaClaro};
  margin: 16px 0;
  font-size: 16px;
  font-weight: 700;
`

export const Entrada = styled.input`
  list-style: none;
  background-color: ${Cores.rosaClaro};
  border: none;
  font-size: 14px;
  font-weight: bold;
  line-height: 100%;
  width: 100%;
  height: 32px;
  margin-top: 8px;
  padding-left: 8px;
`

export const EntradaMenor = styled.input`
  border: none;
  font-size: 14px;
  font-weight: bold;
  margin: 8px 0;
  width: 155px;
  height: 32px;
  padding-left: 8px;
`

export const Comentario = styled.textarea`
  width: 100%;
  margin: 8px 0 8px 0;
  padding: 8px 8px 0 8px;
  font-size: 14px;
  font-weight: bold;
  resize: none;
  border: none;
`
