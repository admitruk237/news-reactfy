import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import '@/shared/index.css'
import { store } from '@/app/appStore'
import { ThemeProvider } from '@/app/providers'
import { BaseLayout } from '@/app/layouts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <BaseLayout />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
)
