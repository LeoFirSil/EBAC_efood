import { useState } from 'react'

import { Link } from 'react-router-dom'

import { HeaderBar, Perfil, Testos, Carrinho } from './styles'

import fundo from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.png'

import MCarrinho from '../../Modal/MCarrinho'
import MEntrega from '../../Modal/MEntrega'
import MPagamento from '../../Modal/MPagamento'
import MConfirmacao from '../../Modal/MConfirmacao'

const Header = () => {
  const [flowModal, setFlowModal] = useState<
    'carrinho' | 'entrega' | 'pagamento' | 'confirmacao' | null
  >(null)

  return (
    <>
      <Perfil style={{ backgroundImage: `url(${fundo})` }}>
        <HeaderBar className="container">
          <Testos>Restaurantes</Testos>
          <Link to="/">
            <img src={logo} alt="efood" />
          </Link>
          <Carrinho onClick={() => setFlowModal('carrinho')}>
            {0} - produto(s) no carrinho
          </Carrinho>
        </HeaderBar>
      </Perfil>

      {flowModal === 'carrinho' && (
        <MCarrinho
          onClose={() => setFlowModal(null)}
          onContinuar={() => setFlowModal('entrega')}
        />
      )}

      {flowModal === 'entrega' && (
        <MEntrega
          onClose={() => setFlowModal(null)}
          onVoltar={() => setFlowModal('carrinho')}
          onComprar={() => setFlowModal('pagamento')}
        />
      )}

      {flowModal === 'pagamento' && (
        <MPagamento
          onClose={() => setFlowModal(null)}
          onVoltar={() => setFlowModal('entrega')}
          onConfirmar={() => setFlowModal('confirmacao')}
        />
      )}

      {flowModal === 'confirmacao' && (
        <MConfirmacao
          onClose={() => setFlowModal(null)}
          onVoltar={() => setFlowModal('entrega')}
          onFinalizar={() => {
            setFlowModal(null)
            console.log('Pagamento finalizado!')
          }}
        />
      )}
    </>
  )
}

export default Header
