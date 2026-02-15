import { Restaurante } from '../../pages/Home'
import Product from '../Product'

import { Container, List } from './styles'

export type Props = {
  food: Restaurante[]
}

const ProductList = ({ food }: Props) => {
  const getFoodTags = (food: Restaurante) => {
    const tags = []

    if (food.destacado) {
      tags.push('Destaque da semana')
    }

    if (food.tipo) {
      tags.push(food.tipo)
    }

    return tags
  }

  return (
    <Container>
      <div className="container">
        <List>
          {food.map((food) => (
            <Product
              key={food.id}
              id={food.id}
              rating={food.avaliacao}
              description={food.descricao}
              image={food.capa}
              infos={getFoodTags(food)}
              foodName={food.titulo}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductList
