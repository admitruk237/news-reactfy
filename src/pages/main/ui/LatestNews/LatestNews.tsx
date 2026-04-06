import { useGetLatestNewsQuery } from '@/entities/news'
import { BannersListWithSkeleton as BannersList } from '@/widgets/news'
import styles from './styles.module.css'

export function LatestNews() {
  const { data, isLoading } = useGetLatestNewsQuery(null)

  return (
    <section className={styles.section}>
      <BannersList
        banners={data && data.news}
        isLoading={isLoading}
      />
    </section>
  )
}

