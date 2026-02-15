import BannerPerfil from '../../components/BannerPerfil'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ProductListBuy from '../../components/ProductstListBuy'
import { Restaurante } from '../Home'

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Perfil = () => {
  const { id } = useParams<{ id: string }>()
  const [cardapio, setCardapio] = useState<Restaurante['cardapio']>([])

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => {
        if (res && res.length > 0 && id) {
          const restaurante = res.find((r: Restaurante) => r.id === Number(id))
          if (restaurante) {
            setCardapio(restaurante.cardapio)
          }
        }
      })
  }, [id])

  return (
    <>
      <Header />
      <BannerPerfil />
      <ProductListBuy refeicao={cardapio} />
      <Footer />
    </>
  )
}

export default Perfil
