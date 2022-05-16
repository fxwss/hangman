import { CodeIcon, MoonIcon, SunIcon } from '@heroicons/react/outline';
import React, { memo } from 'react';
import { useDarkMode } from '../../hooks/useTheme';
import Button from '../atoms/Button';

const Header = () => {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <div className="flex h-12 px-4 py-2 shadow-sm justify-between items-center">
      <h1 className="text-2xl cursor-default select-none">hangman</h1>
      <div className="flex gap-4">
        <a
          rel="noreferrer"
          target="_blank"
          className="transition px-4 py-2"
          href="https://github.com/lusqueta/hangman"
        >
          <CodeIcon className="h-4" />
        </a>
        <Button onClick={toggleTheme}>
          {theme === 'light' ? <SunIcon className="h-4" /> : <MoonIcon className="h-4" />}
        </Button>
      </div>
    </div>
  );
};

export default memo(Header);
