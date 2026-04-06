import { NewsByFilters, LatestNews } from './'
import styles from './styles.module.css'

export function Main() {
  return (
    <main className={styles.main}>
      <LatestNews />
      <NewsByFilters />
    </main>
  )
}

