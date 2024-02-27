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
  { id: 'c1', title: 'Vitamins', color: '#7393B3' },
  { id: 'c2', title: 'Toothpaste', color: '#7393B3' },
  { id: 'c3', title: 'Dental Floss', color: '#7393B3' },
  { id: 'c4', title: 'Mouth wash', color: '#7393B3' },

];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    categoryIds: ['c1', 'c2', 'c4'],
    title: 'Product1',
    description: 'description1',
    price: 10,
    rating: '5/5',
    imageUrl: 'https://www.healthaid.co.uk/cdn/shop/products/801220_VitaminD500iu60tabs_PshopRGB.jpg?v=1659401409',
  },
  {
    id: 'p2',
    categoryIds: ['c1', 'c2', 'c3'],
    title: 'Product2',
    description: 'description2',
    price: 15,
    rating: '2/5',
    imageUrl: 'https://www.colgate.com/content/dam/cp-sites/oral-care/oral-care-center/en_us/whitening-hub/ow-advanced-toothpaste-2023.png',
  },
  {
    id: 'p3',
    categoryIds: ['c1', 'c2', 'c3'],
    title: 'Product3',
    description: 'description3',
    price: 415,
    rating: '4/5',
    imageUrl: 'https://m.media-amazon.com/images/I/71jNFCpBFtL.jpg',
  },
  {
    id: 'p4',
    categoryIds: ['c1', 'c2', 'c3'],
    title: 'Product4',
    description: 'description4',
    price: 150,
    rating: '4/5',
    imageUrl: 'https://s13emagst.akamaized.net/products/27763/27762398/images/res_8ad8f53114b841c6e413b8780d986491.jpg',
  }
]





