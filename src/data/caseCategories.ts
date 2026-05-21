import images from './images'

export type CaseCategorySlug = 'glass' | 'silicone' | 'leather'

export type CaseCategory = {
  slug: CaseCategorySlug
  titleKey: string
  image: string
}

export const caseCategories: CaseCategory[] = [
  { slug: 'glass', titleKey: 'main.glass', image: images.phone1 },
  { slug: 'silicone', titleKey: 'main.silicone', image: images.phone2 },
  { slug: 'leather', titleKey: 'main.leather', image: images.phone3 },
]

export const getCaseCategoryBySlug = (slug?: string) =>
  caseCategories.find((category) => category.slug === slug)
