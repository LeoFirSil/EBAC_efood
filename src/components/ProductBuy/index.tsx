import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { Card, Descricao, Content, Titulo } from './styles'
import Mperfil from '../../Modal/Mperfil'
import { adicionar } from '../../store/reducers/carrinho'
import Refeicao from '../../models/Refeicao'

type Props = {
  id: number
  foodName: string
  description: string
  description2: string
  image: string
  preco: number
}

const ProductBuy = ({
  id,
  foodName,
  description,
  description2,
  preco,
  image
}: Props) => {
  const [perfilOpen, setPerfilOpen] = useState(false)
  const dispatch = useDispatch()

  const refeicao: Refeicao = {
    id,
    foodName,
    description,
    description2,
    image,
    preco
  }

  return (
    <>
      <Card>
        <img src={image} alt={foodName} />
        <Content>
          <Titulo>{foodName}</Titulo>
          <Descricao>{description}</Descricao>
          <button onClick={() => setPerfilOpen(true)}>Mais detalhes</button>
        </Content>
      </Card>

      {perfilOpen && (
        <Mperfil
          foodName={foodName}
          description2={description2}
          image={image}
          preco={preco}
          onClose={() => setPerfilOpen(false)}
          onComprar={() => dispatch(adicionar(refeicao))}
        />
      )}
    </>
  )
}

export default ProductBuy
