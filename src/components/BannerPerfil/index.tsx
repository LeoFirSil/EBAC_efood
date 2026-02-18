import { Imagem, TituloComida, TituloPais } from './styles'

type Props = {
  capa: string
  tipo: string
  titulo: string
}

const BannerPerfil = ({ capa, tipo, titulo }: Props) => (
  <Imagem style={{ backgroundImage: `url(${capa})` }}>
    <div className="container">
      <TituloPais>{tipo}</TituloPais>
      <TituloComida>{titulo}</TituloComida>
    </div>
  </Imagem>
)

export default BannerPerfil
