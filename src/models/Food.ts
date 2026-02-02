class Food {
  id: number
  rating: number
  description: string
  image: string
  infos: string[]
  foodName: string
  tagSize: 'small' | 'big'

  constructor(
    id: number,
    rating: number,
    description: string,
    image: string,
    infos: string[],
    foodName: string,
    tagSize: 'small' | 'big' = 'small'
  ) {
    this.id = id
    this.rating = rating
    this.description = description
    this.image = image
    this.infos = infos
    this.foodName = foodName
    this.tagSize = tagSize
  }
}

export default Food
