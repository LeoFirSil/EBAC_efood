import { Exit, ModalBox, Overlay, Botao, Testo, BoxTesto } from '../styles'
import { DuasEntradas, Titulo, Entrada, EntradaMenor } from '../MEntrega/styles'
import { EntradaCartao, EntradaCvv } from './styles'

type Props = {
  onClose: () => void
  onVoltar: () => void
  onConfirmar: () => void
}

const MPagamento = ({ onClose, onVoltar, onConfirmar }: Props) => {
  return (
    <Overlay>
      <Exit onClick={onClose} />
      <ModalBox>
        <Titulo>Pagamento - Valor a pagar R$ 60,90</Titulo>
        <BoxTesto>
          <Testo>
            Nome no cartão
            <Entrada type="text" />
          </Testo>

          <DuasEntradas>
            <Testo>
              Número do cartão
              <EntradaCartao type="number" />
            </Testo>
            <Testo>
              CVV
              <EntradaCvv type="text" inputMode="numeric" maxLength={3} />
            </Testo>
          </DuasEntradas>

          <DuasEntradas>
            <Testo>
              Mês de vencimento
              <EntradaMenor type="number" />
            </Testo>
            <Testo>
              Ano de vencimento
              <EntradaMenor type="number" />
            </Testo>
          </DuasEntradas>
        </BoxTesto>
        <Botao onClick={onConfirmar}>Finalizar pagamento</Botao>
        <Botao onClick={onVoltar}>Voltar para a edição de endereço</Botao>
      </ModalBox>
    </Overlay>
  )
}

export default MPagamento
