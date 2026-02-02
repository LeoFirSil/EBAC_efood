import styled from 'styled-components'

import { Cores } from '../../styles'

export const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 380px;
`

export const ImagemBanner = styled.div`
  width: 100%;
  height: 380px;
  display: block;
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
`

export const BannerLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: absolute;
  top: 64px;
  width: 100%;
  z-index: 10;
`

export const TextoBanner = styled.h2`
  text-align: center;
  color: ${Cores.rosa};
  font-size: 36px;
  font-weight: bold;
  position: absolute;
  top: 200px;
  width: 100%;
  z-index: 10;
`
