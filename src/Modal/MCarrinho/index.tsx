import lixeira from '../../assets/images/lixeira.png'
import { Card, Lista, Texto, Lixeira, Conteudo } from './styles'
import { Overlay, ModalBox, Botao, Exit, BoxTesto } from '../styles'

type Props = {
  onClose: () => void
  onContinuar: () => void
}

const MCarrinho = ({ onClose, onContinuar }: Props) => {
  return (
    <Overlay>
      <Exit onClick={onClose} />
      <ModalBox>
        <BoxTesto>
          <Lista>
            <Card>
              <Conteudo>
                <img src="//placehold.co/80x80" alt="fotoPrato" />
                <div>
                  <h2>Nome da comida</h2>
                  <h3>R$ valor</h3>
                </div>
              </Conteudo>
              <Lixeira src={lixeira} alt="lixeira" />
            </Card>
            <Card>
              <Conteudo>
                <img src="//placehold.co/80x80" alt="fotoPrato" />
                <div>
                  <h2>Nome da comida</h2>
                  <h3>R$ valor</h3>
                </div>
              </Conteudo>
              <Lixeira src={lixeira} alt="lixeira" />
            </Card>
          </Lista>
          <Texto>
            Valor total
            <div>{'R$ 60,00'}</div>
          </Texto>
        </BoxTesto>
        <Botao onClick={onContinuar}>Continuar com a entrega</Botao>
      </ModalBox>
    </Overlay>
  )
}

export default MCarrinho
