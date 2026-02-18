import BannerPerfil from '../../components/BannerPerfil'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ProductListBuy from '../../components/ProductstListBuy'
import { Restaurante } from '../Home'

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Perfil = () => {
  const { id } = useParams<{ id: string }>()
  const [restaurante, setRestaurante] = useState<Restaurante | null>(null)

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => {
        if (res && res.length > 0 && id) {
          const encontrado = res.find((r: Restaurante) => r.id === Number(id))
          if (encontrado) {
            setRestaurante(encontrado)
          }
        }
      })
  }, [id])

  if (!restaurante) {
    return (
      <>
        <Header />
        <p>Carregando...</p>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <BannerPerfil
        capa={restaurante.capa}
        tipo={restaurante.tipo}
        titulo={restaurante.titulo}
      />
      <ProductListBuy refeicao={restaurante.cardapio} />
      <Footer />
    </>
  )
}

export default Perfil
