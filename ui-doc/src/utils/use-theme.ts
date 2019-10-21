import React, { useState } from 'react';

const getIsDarkMode = () => window.matchMedia("(prefers-color-scheme: dark)").matches;

// TODO: Use localstorage to storage mode
export const useColorMode = (defaultDarkMode = getIsDarkMode()): [string, () => void] => {
  const [mode, setMode] = useState(defaultDarkMode ? 'dark' : 'light');
  const toggleMode = () => {
    setMode(mode === 'dark' ? 'light' : 'dark');
  };
  return [mode, toggleMode];
};
