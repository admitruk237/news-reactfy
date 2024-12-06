import { formatDate } from '../../helpers/formatDate';
import { TiAdjustBrightness, TiWeatherNight } from 'react-icons/ti';
import styles from './styles.module.css';
import { useTheme } from '../../context/ThemeContext';

function Header() {
  const { isDark, toggleTheme } = useTheme();
  return (
    <header
      className={`${styles.header} ${isDark ? styles.dark : styles.light}`}
    >
      <div className={styles.info}>
        <h1 className={styles.title}>NEWS REACTFY</h1>
        <p className={styles.date}>{formatDate(new Date())}</p>
      </div>
      <div className={styles.swichTheme} onClick={toggleTheme}>
        {isDark ? (
          <TiAdjustBrightness className={styles.day} />
        ) : (
          <TiWeatherNight className={styles.night} />
        )}
      </div>
    </header>
  );
}

export default Header;
