import Product from '../Product'

import { Container, List } from './styles'
import Food from '../../models/Food'

export type Props = {
  food: Food[]
}

const ProductList = ({ food }: Props) => (
  <Container>
    <div className="container">
      <List>
        {food.map((food) => (
          <Product
            key={food.id}
            rating={food.rating}
            description={food.description}
            image={food.image}
            infos={food.infos}
            foodName={food.foodName}
            tagSize={food.tagSize}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductList
