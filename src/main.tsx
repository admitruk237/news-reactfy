import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ThemeProbider } from './context/ThemeContext.tsx';
import { Provider } from 'react-redux';
import { store } from './store/index.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProbider>
      <Provider store={store}>
        <App />
      </Provider>
      .
    </ThemeProbider>
  </React.StrictMode>
);
