import BannerHome from '../../components/BannerHome'
import Footer from '../../components/Footer'
import ProductList from '../../components/ProductstList'
import Food from '../../models/Food'

import sushi from '../../assets/images/sushi.png'
import esfiha from '../../assets/images/esfihas.png'

const promocoes: Food[] = [
  {
    id: 1,
    rating: 4.9,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. \n Experimente o Japão sem sair do lar com nosso delivery!',
    foodName: 'Hioki Sushi',
    infos: ['Destaque da semana', 'Japonesa'],
    image: sushi,
    tagSize: 'small'
  },
  {
    id: 2,
    rating: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    foodName: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    image: esfiha,
    tagSize: 'big'
  },
  {
    id: 3,
    rating: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    foodName: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    image: esfiha,
    tagSize: 'big'
  },
  {
    id: 4,
    rating: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    foodName: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    image: esfiha,
    tagSize: 'big'
  },
  {
    id: 5,
    rating: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    foodName: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    image: esfiha,
    tagSize: 'big'
  },
  {
    id: 6,
    rating: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    foodName: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    image: esfiha,
    tagSize: 'big'
  }
]

const Home = () => (
  <>
    <BannerHome />
    <ProductList food={promocoes} />
    <Footer />
  </>
)

export default Home
