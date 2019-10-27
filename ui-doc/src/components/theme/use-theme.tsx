import React, { useState } from 'react';
import { ThemeConsumer, ThemeContext } from 'styled-components';

const getIsDarkMode = () => window.matchMedia("(prefers-color-scheme: dark)").matches;

export const ColorModeContext = React.createContext();
// TODO: Use localstorage to storage mode
export const useColorMode = () => {
  const colorModeState = React.useContext(ColorModeContext);

  if (!colorModeState) {
    throw new Error(`[useColorMode] requires the ColorModeProvider component`);
  }

  return colorModeState;
};

export const useColorModeState = (defaultMode: string): [string, () => void] => {
  // eslint-disable-next-line no-nested-ternary
  const [mode, setMode] = useState(defaultMode || (getIsDarkMode() ? 'dark' : 'light'));
  const toggleMode = () => {
    setMode(mode === 'dark' ? 'light' : 'dark');
  };
  return [mode, toggleMode];
};

export const ColorThemeProvider = ({ children }) => {
  const theme = React.useContext(ThemeContext);
  const [mode, setMode] = useColorModeState(theme.defaultMode);
  const currTheme = theme.colors[mode];
  return (
    <ColorModeContext.Provider value={[
      mode,
      setMode
    ]}>
      {children}
    </ColorModeContext.Provider>
  );
};
