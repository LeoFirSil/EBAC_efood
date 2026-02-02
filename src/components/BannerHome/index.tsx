import {
  ImagemBanner,
  BannerLogo,
  TextoBanner,
  BannerContainer
} from './styles'

import logo from '../../assets/images/logo.png'
import fundo from '../../assets/images/fundo.png'

const BannerHome = () => (
  <BannerContainer>
    <ImagemBanner style={{ backgroundImage: `url(${fundo})` }} />
    <BannerLogo>
      <img src={logo} alt="Logo" />
    </BannerLogo>
    <TextoBanner>
      Viva experiências gastronômicas <br /> no conforto da sua casa
    </TextoBanner>
  </BannerContainer>
)

export default BannerHome
