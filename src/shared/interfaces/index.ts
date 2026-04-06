import { CategoriesType } from '@/entities/category'
import { INews } from '@/entities/news'

export type { CategoriesType, INews }

export type SkeletonType = 'banner' | 'item'
export type DirectionType = 'row' | 'column'

export type IFilters = {
  page_number: number
  page_size: number
  category: CategoriesType | null
  keywords: string
}

export type ParamsType = Partial<IFilters>

export type IPaginationProps = {
  totalPages: number
  handlePreviousPage: () => void
  handleNextPage: () => void
  handlePageClick: (page: number) => void
  currentPage: number
}
