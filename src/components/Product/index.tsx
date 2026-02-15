import Tag from '../Tag'
import estrela from '../../assets/images/estrela.png'

import {
  Card,
  Descricao,
  Titulo,
  Infos,
  TituloNota,
  Content,
  Nota
} from './styles'
import { ButtonLink } from '../Buttton/styles'

type Props = {
  foodName: string
  rating: number
  description: string
  infos: string[]
  image: string
  id: number
  tagSize?: 'small' | 'big'
}

const Product = ({
  foodName,
  rating,
  description,
  image,
  infos,
  id,
  tagSize = 'small'
}: Props) => (
  <Card>
    <img src={image} alt={foodName} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info} size={tagSize}>
          {info}
        </Tag>
      ))}
    </Infos>
    <Content>
      <TituloNota>
        <Titulo>{foodName}</Titulo>
        <Nota>
          <h4>{rating}</h4>
          <img src={estrela} alt="estrela" />
        </Nota>
      </TituloNota>
      <Descricao>{description}</Descricao>
      <ButtonLink to={`/Perfil/${id}`}>Saiba mais</ButtonLink>
    </Content>
  </Card>
)

export default Product
