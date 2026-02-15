import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../../store'
import { remover } from '../../store/reducers/carrinho'

import lixeira from '../../assets/images/lixeira.png'
import { Card, Lista, Texto, Lixeira, Conteudo, FotoComida } from './styles'
import { Overlay, ModalBox, Botao, Exit, BoxTesto } from '../styles'

type Props = {
  onClose: () => void
  onContinuar: () => void
}

const MCarrinho = ({ onClose, onContinuar }: Props) => {
  const dispatch = useDispatch()
  const itens = useSelector((state: RootState) => state.carrinho.itens)

  const total = itens.reduce((acc, item) => acc + item.preco, 0)

  const handleContinuar = () => {
    if (itens.length === 0) {
      alert('Carrinho vazio! clique fora para retornar!')
      return
    }
    onContinuar()
  }

  return (
    <Overlay>
      <Exit onClick={onClose} />
      <ModalBox>
        <BoxTesto>
          <Lista>
            {itens.map((item) => (
              <Card key={item.id}>
                <Conteudo>
                  <FotoComida src={item.foto} alt={item.nome} width={80} />
                  <div>
                    <h2>{item.nome}</h2>
                    <h3>
                      {item.preco.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                      })}
                    </h3>
                  </div>
                </Conteudo>
                <Lixeira
                  src={lixeira}
                  alt="lixeira"
                  onClick={() => dispatch(remover(item.id))}
                />
              </Card>
            ))}
          </Lista>
          <Texto>
            Valor total
            <div>
              {total.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              })}
            </div>
          </Texto>
        </BoxTesto>
        <Botao onClick={handleContinuar}>Continuar com a entrega</Botao>
      </ModalBox>
    </Overlay>
  )
}

export default MCarrinho
