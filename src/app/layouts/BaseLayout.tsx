import { useTheme } from '@/app/providers/ThemeProvider'
import { Main } from '@/pages/main'
import { Header } from '@/widgets/header'

export function BaseLayout() {
  const { isDark } = useTheme()

  return (
    <div className={`app ${isDark ? 'dark' : 'light'} `}>
      <Header />
      <div className="container">
        <Main />
      </div>
    </div>
  )
}

