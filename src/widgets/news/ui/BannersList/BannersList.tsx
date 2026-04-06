import styles from './styles.module.css'
import { INews, NewsBanner } from '@/entities/news'
import { withSkeleton } from '@/shared/hocs'

type Props = {
  banners?: INews[] | null
}

function BannersList({ banners }: Props) {
  return (
    <ul className={styles.banners}>
      {banners?.map((banner) => {
        return (
          <NewsBanner
            key={banner.id}
            item={banner}
          />
        )
      })}
    </ul>
  )
}

export const BannersListWithSkeleton = withSkeleton<Props>(
  BannersList,
  'banner',
  10,
  'row',
)
