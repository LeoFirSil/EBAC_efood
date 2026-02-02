import styled from 'styled-components'
import { Cores } from '../styles'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: right;
  z-index: 999;
`

export const ModalBox = styled.div`
  background: ${Cores.rosa};
  width: 360px;
  height: 100%;
  padding: 16px 8px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: right;
`

export const Exit = styled.div`
  height: 100%;
  width: 100%;
  background: transparent;
`

export const Botao = styled.button`
  background-color: ${Cores.rosaClaro};
  color: ${Cores.rosa};
  font-size: 14px;
  font-weight: 700;
  height: 24px;
  width: 344px;
  border: none;
  margin-top: 8px;
`
export const Testo = styled.label`
  display: flex;
  flex-direction: column;
  color: ${Cores.rosaClaro};
  font-size: 14px;
  font-weigth: 700;
  line-height: 100%;
  margin-top: 8px;
`

export const BoxTesto = styled.div`
  margin-bottom: 8px;
  gap: 8px;
`
