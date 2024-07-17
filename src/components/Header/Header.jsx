import { formatDate } from '../../helpers/formatDate';
import styles from '../Header/styles.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>NEWS REACTFY</h1>
      <p className={styles.date}>{formatDate(new Date())}</p>
    </header>
  );
}

export default Header;