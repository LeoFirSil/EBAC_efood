import ProductBuy from '../ProductBuy'

import { Container, List } from './styles'
import Refeicao from '../../models/Refeicao'

export type Props = {
  refeicao: Refeicao[]
}

const ProductListBuy = ({ refeicao }: Props) => (
  <Container>
    <div className="container">
      <List>
        {refeicao.map((refeicao) => (
          <ProductBuy
            key={refeicao.id}
            description={refeicao.description}
            image={refeicao.image}
            foodName={refeicao.foodName}
            description2={refeicao.description2}
            preco={refeicao.preco}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductListBuy
