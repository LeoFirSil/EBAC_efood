import close from '../../assets/images//close.png'

import {
  Overlay,
  ModalBox,
  CloseIcon,
  Foto,
  BoxText,
  AddButton
} from './styles'

type Props = {
  nome: string
  descricao: string
  foto: string
  preco: number
  porcao: string
  onClose: () => void
  onComprar: () => void
}

const Mperfil = ({
  nome,
  descricao,
  foto,
  preco,
  porcao,
  onClose,
  onComprar
}: Props) => {
  return (
    <>
      <Overlay>
        <ModalBox>
          <CloseIcon onClick={onClose}>
            <img src={close} alt="x" />
          </CloseIcon>
          <Foto src={foto} alt={nome} />
          <div>
            <h2>{nome}</h2>
            <BoxText>{descricao}</BoxText>
            <BoxText>Porção: {porcao}</BoxText>
            <AddButton
              onClick={() => {
                onComprar()
                onClose()
                alert('Produto adicionado ao carrinho!')
              }}
            >
              Adicionar ao carrinho -
              {preco.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              })}
            </AddButton>
          </div>
        </ModalBox>
      </Overlay>
    </>
  )
}

export default Mperfil
