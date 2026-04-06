import { withSkeleton } from '@/shared/hocs'
import styles from './styles.module.css'
import { INews, NewsItem } from '@/entities/news'

type Props = {
  news?: INews[]
}

function NewsList({ news }: Props) {
  return (
    <ul className={styles.list}>
      {news?.map((item) => {
        return (
          <NewsItem
            key={item.id}
            item={item}
          />
        )
      })}
    </ul>
  )
}
export const NewsListWithSkeleton = withSkeleton<Props>(NewsList, 'item', 10)
