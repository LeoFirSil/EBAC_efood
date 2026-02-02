import { Link } from 'react-router-dom'

import { FooterContainer, LinkMidia, Testo } from './styles'

import logo from '../../assets/images/logo.png'
import insta from '../../assets/images/instagram-round-svgrepo-com (1) 1.png'
import face from '../../assets/images/facebook-round-svgrepo-com 1.png'
import twitter from '../../assets/images/twitter-2-svgrepo-com 1.png'

const Footer = () => (
  <FooterContainer>
    <Link to="/">
      <img src={logo} alt="logo" />
    </Link>
    <LinkMidia>
      <li>
        <a href="#">
          <img src={insta} alt="instagram" />
        </a>
      </li>
      <li>
        <a href="#">
          <img src={face} alt="facebook" />
        </a>
      </li>
      <li>
        <a href="#">
          <img src={twitter} alt="twitter" />
        </a>
      </li>
    </LinkMidia>
    <Testo>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </Testo>
  </FooterContainer>
)

export default Footer
