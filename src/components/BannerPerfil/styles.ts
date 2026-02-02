import styled from 'styled-components'
import { Cores } from '../../styles'

export const Imagem = styled.div`
  color: ${Cores.branco};
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: overlay;
`
export const TituloPais = styled.h2`
  font-size: 30px;
  font-weight: 100;
  padding-top: 24px;
`

export const TituloComida = styled.h3`
  font-size: 30px;
  font-weight: bold;
  padding-top: 150px;
`
