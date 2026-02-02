import { Botao, BoxTesto, Exit, ModalBox, Overlay, Testo } from '../styles'
import {
  Titulo,
  EntradaMenor,
  Entrada,
  DuasEntradas,
  Comentario
} from './styles'

type Props = {
  onClose: () => void
  onVoltar: () => void
  onComprar: () => void
}

const MEntrega = ({ onClose, onVoltar, onComprar }: Props) => {
  return (
    <Overlay>
      <Exit onClick={onClose} />
      <ModalBox>
        <Titulo>Entrega</Titulo>
        <BoxTesto>
          <Testo>
            Quem irá receber
            <Entrada type="text" />
          </Testo>
          <Testo>
            Endereço
            <Entrada type="text" />
          </Testo>
          <Testo>
            Cidade
            <Entrada type="text" />
          </Testo>
          <DuasEntradas>
            <Testo>
              CEP
              <EntradaMenor type="number" />
            </Testo>
            <Testo>
              Número
              <EntradaMenor type="number" />
            </Testo>
          </DuasEntradas>
          <Testo>
            Complemento (opcional)
            <Comentario />
          </Testo>
        </BoxTesto>
        <Botao onClick={onComprar}>Continuar com o pagamento</Botao>
        <Botao onClick={onVoltar}>Voltar para o carrinho</Botao>
      </ModalBox>
    </Overlay>
  )
}

export default MEntrega
