import { createContext, ReactNode, useContext, useState } from 'react';

interface IThemeContext {
  isDark: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<IThemeContext | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('context error');
  }
  return context;
};

interface ThemeProbiderProps {
  children: ReactNode;
}

export const ThemeProbider = ({ children }: ThemeProbiderProps) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };
  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
