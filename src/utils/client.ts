import type { RichProduct } from '@/types/types'

export const productToLink = (product: RichProduct) => {
  return `/product/${product.id}/${product.autogeneratedSlug}`
}

export const formatPrice = (price?: number, locale: string = 'ru-RU') => {
  return new Intl.NumberFormat(locale, { style: 'currency', currency: 'RUB' }).format(price ?? 0)
}
