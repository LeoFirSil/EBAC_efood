import { useDispatch } from 'react-redux'
import { limpar } from '../../store/reducers/carrinho'
import { Titulo } from '../MEntrega/styles'
import { ModalBox, Overlay, Exit, BoxTesto, Botao } from '../styles'
import { TestoFinal } from './styles'

type Props = {
  onClose: () => void
  onVoltar: () => void
  onFinalizar: () => void
}

const MConfirmacao = ({ onClose, onVoltar, onFinalizar }: Props) => {
  void onVoltar
  const dispatch = useDispatch()

  return (
    <Overlay>
      <Exit onClick={onClose} />
      <ModalBox>
        <Titulo>Pedido realizado - ORDER_ID</Titulo>
        <BoxTesto>
          <TestoFinal>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido. <br />
            <br />
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras. <br />
            <br />
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição. <br />
            <br />
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite! <br />
            <br />
          </TestoFinal>
        </BoxTesto>
        <Botao
          onClick={() => {
            onFinalizar()
            dispatch(limpar())
            alert('Compra finalizada com sucesso!')
          }}
        >
          Concluir
        </Botao>
      </ModalBox>
    </Overlay>
  )
}

export default MConfirmacao
