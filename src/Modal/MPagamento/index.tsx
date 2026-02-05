import { useState } from 'react'

import { Exit, ModalBox, Overlay, Botao, Testo, BoxTesto } from '../styles'
import { DuasEntradas, Titulo, Entrada, EntradaMenor } from '../MEntrega/styles'
import { EntradaCartao, EntradaCvv } from './styles'

type Props = {
  onClose: () => void
  onVoltar: () => void
  onConfirmar: () => void
}

const MPagamento = ({ onClose, onVoltar, onConfirmar }: Props) => {
  const [nome, setNome] = useState('')
  const [numero, setNumero] = useState('')
  const handleNumeroChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '')
    if (value.length > 16) value = value.slice(0, 16)

    value = value.replace(/(\d{4})(?=\d)/g, '$1 ')
    setNumero(value)
  }

  const [cvv, setCvv] = useState('')
  const [mes, setMes] = useState('')
  const [ano, setAno] = useState('')

  const handleContinuar = () => {
    if (!nome || !numero || !cvv || !mes || !ano) {
      alert('Por favor, preencha todos os campos obrigatórios!')
      return
    }
    onConfirmar()
  }

  return (
    <Overlay>
      <Exit onClick={onClose} />
      <ModalBox>
        <Titulo>Pagamento - Valor a pagar R$ 60,90</Titulo>
        <BoxTesto>
          <Testo>
            Nome no cartão
            <Entrada
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </Testo>

          <DuasEntradas>
            <Testo>
              Número do cartão
              <EntradaCartao
                type="text"
                value={numero}
                onChange={handleNumeroChange}
                maxLength={19}
              />
            </Testo>
            <Testo>
              CVV
              <EntradaCvv
                type="text"
                inputMode="numeric"
                maxLength={3}
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
              />
            </Testo>
          </DuasEntradas>

          <DuasEntradas>
            <Testo>
              Mês de vencimento
              <EntradaMenor
                type="number"
                min={1}
                max={12}
                value={mes}
                onChange={(e) => setMes(e.target.value)}
              />
            </Testo>
            <Testo>
              Ano de vencimento
              <EntradaMenor
                type="text"
                maxLength={4}
                value={ano}
                onChange={(e) => setAno(e.target.value.replace(/\D/g, ''))}
              />
            </Testo>
          </DuasEntradas>
        </BoxTesto>
        <Botao onClick={handleContinuar}>Finalizar pagamento</Botao>
        <Botao onClick={onVoltar}>Voltar para a edição de endereço</Botao>
      </ModalBox>
    </Overlay>
  )
}

export default MPagamento
