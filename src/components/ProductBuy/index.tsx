import { useState } from 'react'

import { Card, Descricao, Content, Titulo } from './styles'
import Mperfil from '../../Modal/Mperfil'

type Props = {
  foodName: string
  description: string
  description2: string
  image: string
  preco: number
}

const ProductBuy = ({
  foodName,
  description,
  description2,
  preco,
  image
}: Props) => {
  const [perfilOpen, setPerfilOpen] = useState(false)

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
          onComprar={() => setPerfilOpen(false)}
        />
      )}
    </>
  )
}

export default ProductBuy
