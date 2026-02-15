import { Refeicao } from '../../pages/Home'
import ProductBuy from '../ProductBuy'

import { Container, List } from './styles'

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
            id={refeicao.id}
            descricao={refeicao.descricao}
            foto={refeicao.foto}
            nome={refeicao.nome}
            porcao={refeicao.porcao}
            preco={refeicao.preco}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductListBuy
