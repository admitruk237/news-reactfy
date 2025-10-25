import { useState, useEffect } from 'react'
import styles from './styles.module.css'
import NewsBanner from '../../NewsBanner/NewsBanner'
import withSkeleton from '../../helpers/hocs/withSkeleton'
import { INews } from '../../interfaces'

interface Props {
  banners?: INews[] | null
}

function BannersList({ banners }: Props) {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const checkScreen = () => setIsDesktop(window.innerWidth > 768)

    checkScreen()
    window.addEventListener('resize', checkScreen)

    return () => window.removeEventListener('resize', checkScreen)
  }, [])

  return (
    <ul className={styles.banners}>
      {isDesktop
        ? banners?.map((banner) => (
            <NewsBanner
              key={banner.id}
              item={banner}
            />
          ))
        : banners && banners[0] && <NewsBanner item={banners[0]} />}
    </ul>
  )
}

const BannersListWithSkeleton = withSkeleton<Props>(
  BannersList,
  'banner',
  10,
  'row'
)

export default BannersListWithSkeleton
