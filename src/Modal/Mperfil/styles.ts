import styled from 'styled-components'
import { Cores } from '../../styles'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`

export const ModalBox = styled.div`
  width: 1024px;
  height: 340px;
  background: ${Cores.rosa};
  padding: 32px;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;

  h2 {
    color: ${Cores.rosaClaro};
    font-size: 18px;
    font-weigt: bold;
  }

  div {
    margin-left: 24px;
    height: 100%;
  }
`

export const CloseIcon = styled.button`
  color: ${Cores.rosaClaro};
  position: absolute;
  top: 8px;
  right: 8px;
  background: transparent;
  border: none;
  size: 16px;
`

export const Foto = styled.img`
  height: 280px;
  width: 280px;
  object-fit: cover;
`

export const BoxText = styled.h3`
  font-size: 14px;
  font-weight: 400;
  width: 656px;
  line-height: 22px;
  color: ${Cores.branco};
  margin-top: 16px;
  white-space: pre-line;
`

export const AddButton = styled.button`
  font-size: 14px;
  font-weight: bold;
  margin-top: 16px;
  padding: 4px 7px;
  background: ${Cores.rosaClaro};
  color: ${Cores.rosa};
  border: none;
  cursor: pointer;
`
