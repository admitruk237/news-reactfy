import { useTheme } from '@/app/providers/ThemeProvider'
import styles from './styles.module.css'
import { TiAdjustBrightness, TiWeatherNight } from 'react-icons/ti'

export function ThemeButton() {
  const { isDark, toggleTheme } = useTheme()
  return (
    <div
      className={styles.switchTheme}
      onClick={toggleTheme}
    >
      {isDark ? (
        <TiAdjustBrightness className={styles.day} />
      ) : (
        <TiWeatherNight className={styles.night} />
      )}
    </div>
  )
}
