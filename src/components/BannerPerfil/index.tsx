import { Imagem, TituloComida, TituloPais } from './styles'

import bannerPng from '../../assets/images/esfihas.png'

const BannerPerfil = () => (
  <Imagem style={{ backgroundImage: `url(${bannerPng})` }}>
    <div className="container">
      <TituloPais>Italiana</TituloPais>
      <TituloComida>La Dolce Vita Trattoria</TituloComida>
    </div>
  </Imagem>
)

export default BannerPerfil
