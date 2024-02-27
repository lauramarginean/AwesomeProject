type Category = {
  id: string,
  title: string,
  color: string,

}
export default Category;

export type Product = {
  id: string,
  categoryIds: string[],
  title: string,
  imageUrl: string,
  description: string,
  price: number,
  rating: string
}



export const CATEGORIES: Category[] = [
  { id: 'c1', title: 'Vitamins', color: 'pink' },
  { id: 'c2', title: 'b', color: 'red' },
  { id: 'c3', title: 'c', color: 'green' },
  { id: 'c4', title: 'd', color: 'yellow' },

];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    categoryIds: ['c1', 'c2', 'c4'],
    title: 'Product1',
    description: 'description1',
    price: 10,
    rating: '5/5',
    imageUrl: 'https://static.wikia.nocookie.net/diet/images/7/74/Images1222.jpeg/revision/latest/scale-to-width-down/220?cb=20130610231354',
  },
  {
    id: 'p2',
    categoryIds: ['c1', 'c2', 'c3'],
    title: 'Product2',
    description: 'description2',
    price: 15,
    rating: '4/5',
    imageUrl: 'https://www.colgate.com/content/dam/cp-sites/oral-care/oral-care-center/en_us/whitening-hub/ow-advanced-toothpaste-2023.png',
  }
]





