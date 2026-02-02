class Refeicao {
  id: number
  description: string
  description2: string
  image: string
  foodName: string
  preco: number

  constructor(
    id: number,
    description: string,
    description2: string,
    image: string,
    foodName: string,
    preco: number
  ) {
    this.id = id
    this.description = description
    this.description2 = description2
    this.image = image
    this.foodName = foodName
    this.preco = preco
  }
}

export default Refeicao
