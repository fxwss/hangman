import { useContext, useEffect } from 'react';
import { ThemeContext } from '../contexts/Theme';

export function useDarkMode() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  useEffect(() => {
    document.documentElement.classList.remove('dark');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    }

    localStorage['theme'] = theme;
  }, [theme]);

  return { theme, setTheme, toggleTheme };
}
