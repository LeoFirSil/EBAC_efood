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
  foodName: string
  description2: string
  image: string
  preco: number
  onClose: () => void
  onComprar: () => void
}

const Mperfil = ({
  foodName,
  description2,
  image,
  preco,
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
          <Foto src={image} alt={foodName} />
          <div>
            <h2>{foodName}</h2>
            <BoxText>{description2}</BoxText>
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
