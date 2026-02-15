import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { Card, Descricao, Content, Titulo } from './styles'
import Mperfil from '../../Modal/Mperfil'
import { adicionar } from '../../store/reducers/carrinho'
import { Refeicao } from '../../pages/Home'

type Props = {
  id: number
  nome: string
  descricao: string
  porcao: string
  foto: string
  preco: number
}

const ProductBuy = ({ id, nome, descricao, porcao, preco, foto }: Props) => {
  const [perfilOpen, setPerfilOpen] = useState(false)
  const dispatch = useDispatch()

  const refeicao: Refeicao = {
    id,
    nome,
    descricao,
    porcao,
    foto,
    preco
  }

  return (
    <>
      <Card>
        <img src={foto} alt={nome} />
        <Content>
          <Titulo>{nome}</Titulo>
          <Descricao>{descricao}</Descricao>
          <button onClick={() => setPerfilOpen(true)}>Mais detalhes</button>
        </Content>
      </Card>

      {perfilOpen && (
        <Mperfil
          nome={nome}
          descricao={descricao}
          porcao={porcao}
          foto={foto}
          preco={preco}
          onClose={() => setPerfilOpen(false)}
          onComprar={() => dispatch(adicionar(refeicao))}
        />
      )}
    </>
  )
}

export default ProductBuy
