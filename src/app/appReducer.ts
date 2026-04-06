import { categoriesApi } from '@/entities/category'
import { newsApi, newsReducer } from '@/entities/news'

export const rootReducer = {
  news: newsReducer,
  [newsApi.reducerPath]: newsApi.reducer,
  [categoriesApi.reducerPath]: categoriesApi.reducer,
}
