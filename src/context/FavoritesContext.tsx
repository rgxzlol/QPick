import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { getProductById } from '../data/products'
import type { Product } from '../data/products'

const STORAGE_KEY = 'qpick-favorites'

type FavoritesContextType = {
  favoriteIds: number[]
  toggleFavorite: (productId: number) => void
  isFavorite: (productId: number) => boolean
  totalCount: number
  favoriteProducts: Product[]
  favoriteHeadphones: Product[]
  favoriteWireless: Product[]
}

const FavoritesContext = createContext<FavoritesContextType | null>(null)

const loadFavorites = (): number[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as number[]
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favoriteIds, setFavoriteIds] = useState<number[]>(loadFavorites)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favoriteIds))
  }, [favoriteIds])

  const toggleFavorite = useCallback((productId: number) => {
    setFavoriteIds((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId],
    )
  }, [])

  const isFavorite = useCallback(
    (productId: number) => favoriteIds.includes(productId),
    [favoriteIds],
  )

  const favoriteProducts = useMemo(
    () =>
      favoriteIds
        .map((id) => getProductById(id))
        .filter((product): product is Product => product != null),
    [favoriteIds],
  )

  const favoriteHeadphones = useMemo(
    () => favoriteProducts.filter((p) => p.id >= 4 && p.id <= 9),
    [favoriteProducts],
  )

  const favoriteWireless = useMemo(
    () => favoriteProducts.filter((p) => p.id >= 10 && p.id <= 12),
    [favoriteProducts],
  )

  const value = useMemo(
    () => ({
      favoriteIds,
      toggleFavorite,
      isFavorite,
      totalCount: favoriteIds.length,
      favoriteProducts,
      favoriteHeadphones,
      favoriteWireless,
    }),
    [
      favoriteIds,
      toggleFavorite,
      isFavorite,
      favoriteProducts,
      favoriteHeadphones,
      favoriteWireless,
    ],
  )

  return (
    <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
  )
}

export const useFavorites = () => {
  const context = useContext(FavoritesContext)
  if (!context) {
    throw new Error('useFavorites must be used within FavoritesProvider')
  }
  return context
}
