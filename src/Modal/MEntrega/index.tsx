import { useState } from 'react'

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
  const [nome, setNome] = useState('')
  const [endereco, setEndereco] = useState('')
  const [cidade, setCidade] = useState('')
  const [CEP, setCep] = useState('')

  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '')

    if (value.length > 8) {
      value = value.slice(0, 8)
    }

    if (value.length > 5) {
      value = value.slice(0, 5) + '-' + value.slice(5)
    }
    setCep(value)
  }

  const [numero, setNumero] = useState('')
  const [complemento, setComplemento] = useState('')

  const handleContinuar = () => {
    if (!nome || !endereco || !cidade || !CEP || !numero) {
      alert('Por favor, preencha todos os campos obrigatórios!')
      return
    }
    onComprar()
  }

  return (
    <Overlay>
      <Exit onClick={onClose} />
      <ModalBox>
        <Titulo>Entrega</Titulo>
        <BoxTesto>
          <Testo>
            Quem irá receber
            <Entrada
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </Testo>
          <Testo>
            Endereço
            <Entrada
              type="text"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
            />
          </Testo>
          <Testo>
            Cidade
            <Entrada
              type="text"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
            />
          </Testo>
          <DuasEntradas>
            <Testo>
              CEP
              <EntradaMenor
                type="text"
                value={CEP}
                onChange={handleCepChange}
              />
            </Testo>
            <Testo>
              Número
              <EntradaMenor
                type="number"
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
              />
            </Testo>
          </DuasEntradas>
          <Testo>
            Complemento (opcional)
            <Comentario
              value={complemento}
              onChange={(e) => setComplemento(e.target.value)}
            />
          </Testo>
        </BoxTesto>
        <Botao onClick={handleContinuar}>Continuar com o pagamento</Botao>
        <Botao onClick={onVoltar}>Voltar para o carrinho</Botao>
      </ModalBox>
    </Overlay>
  )
}

export default MEntrega
