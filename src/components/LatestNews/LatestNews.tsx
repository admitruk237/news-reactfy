import { useGetLatestNewsQuery } from '../../store/services/newsApi';
import BannersList from '../BannersList/BannersList';
import styles from './styles.module.css';

function LatestNews() {
  const { data, isLoading } = useGetLatestNewsQuery(null);

  return (
    <section className={styles.section}>
      <BannersList banners={data && data.news} isLoading={isLoading} />
    </section>
  );
}

export default LatestNews;
