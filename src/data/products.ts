import images from './images'

export type Product = {
  id: number
  name: string
  image: string
  price?: number
  oldPrice?: number
  hideOldPrice?: boolean
  salePercent?: number
  priceAddStyle?: boolean
  rating?: number
  showApple?: boolean
  appleHidden?: boolean
  currency?: 'tenge' | 'kzt'
  description?: string
}

const formatPrice = (value: number, currency: 'tenge' | 'kzt' = 'tenge') =>
  currency === 'kzt' ? `${value} KZT` : `${value} ₸`

export const formatPriceValue = (value: number, currency: 'tenge' | 'kzt' = 'tenge') =>
  formatPrice(value, currency)

export const formatProductPrice = (product: Product) =>
  formatPrice(product.price ?? 0, product.currency)

export const formatProductLineTotal = (product: Product, quantity: number) =>
  formatPrice((product.price ?? 0) * quantity, product.currency)

export const formatProductOldPrice = (product: Product) =>
  product.oldPrice != null ? formatPrice(product.oldPrice, product.currency) : null

export const products: Product[] = [
  {
    id: 4,
    name: 'Apple BYZ S852I',
    image: images.earphone1,
    price: 2927,
    oldPrice: 3527,
    rating: 4.7,
    description: 'Наушники Apple BYZ S852I',
  },
  {
    id: 5,
    name: 'Apple EarPods',
    image: images.earphone2,
    price: 2327,
    oldPrice: 3527,
    hideOldPrice: true,
    rating: 4.5,
    description: 'Наушники Apple EarPods',
  },
  {
    id: 6,
    name: 'Apple EarPods',
    image: images.earphone3,
    price: 2327,
    oldPrice: 3527,
    hideOldPrice: true,
    rating: 4.7,
    description: 'Наушники Apple EarPods',
  },
  {
    id: 7,
    name: 'Apple BYZ S852I',
    image: images.earphone1,
    price: 2927,
    oldPrice: 3527,
    salePercent: 20,
    priceAddStyle: true,
    rating: 4.7,
    description: 'Наушники Apple BYZ S852I',
  },
  {
    id: 8,
    name: 'Apple EarPods',
    image: images.earphone2,
    price: 2327,
    oldPrice: 3527,
    hideOldPrice: true,
    rating: 4.5,
    description: 'Наушники Apple EarPods',
  },
  {
    id: 9,
    name: 'Apple EarPods',
    image: images.earphone3,
    price: 2327,
    oldPrice: 3527,
    hideOldPrice: true,
    rating: 4.5,
    description: 'Наушники Apple EarPods',
  },
  {
    id: 10,
    name: 'Apple AirPods',
    image: images.wirreles1,
    price: 9527,
    oldPrice: 3527,
    hideOldPrice: true,
    showApple: true,
    rating: 4.7,
    description: 'Беспроводные наушники Apple AirPods',
  },
  {
    id: 11,
    name: 'GERLAX GH-04',
    image: images.wirreles2,
    price: 6527,
    oldPrice: 3527,
    hideOldPrice: true,
    showApple: true,
    appleHidden: true,
    currency: 'kzt',
    rating: 4.7,
    description: 'Беспроводные наушники GERLAX GH-04',
  },
  {
    id: 12,
    name: 'BOROFONE BO4',
    image: images.wirreles3,
    price: 7527,
    oldPrice: 3527,
    hideOldPrice: true,
    showApple: true,
    appleHidden: true,
    currency: 'kzt',
    rating: 4.7,
    description: 'Беспроводные наушники BOROFONE BO4',
  },
]

export const headphoneProducts = products.filter((p) => p.id >= 4 && p.id <= 9)

export const wirelessProducts = products.filter((p) => p.id >= 10 && p.id <= 12)

export const getProductById = (id: number) => products.find((p) => p.id === id)
