import { useEffect, useState } from 'react'

import BannerHome from '../../components/BannerHome'
import Footer from '../../components/Footer'
import ProductList from '../../components/ProductstList'

export type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Refeicao[]
}

export type Refeicao = {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

const Home = () => {
  const [promocoes, setPromocoes] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setPromocoes(res))
  }, [])

  return (
    <>
      <BannerHome />
      <ProductList food={promocoes} />
      <Footer />
    </>
  )
}

export default Home
