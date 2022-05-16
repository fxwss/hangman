import React, {
  createContext,
  Dispatch,
  HTMLAttributes,
  PropsWithChildren,
  SetStateAction,
  useState,
} from 'react';

function getDefaultTheme() {
  if (
    localStorage['theme'] === 'dark' ||
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    return 'dark';
  }
  return 'light';
}

type ThemeContextType = {
  theme: 'dark' | 'light';
  setTheme: Dispatch<SetStateAction<'light' | 'dark'>>;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: getDefaultTheme(),
  setTheme: () => null,
});

export const ThemeContextProvider = ({ children }: PropsWithChildren<HTMLAttributes<'div'>>) => {
  const [theme, setTheme] = useState<'light' | 'dark'>(getDefaultTheme());

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};
