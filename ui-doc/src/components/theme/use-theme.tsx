import React, { useState } from 'react';
import deepmerge from 'deepmerge';
import { ThemeProvider } from './theme-provider';
// import { ThemeProvider } from 'styled-components';
import { defaultThemeConfig } from '.';

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

export const ColorThemeProvider = ({ children, theme }) => {
  const [mode, setMode] = useColorModeState(theme.defaultMode);
  const computedTheme = React.useMemo(() => deepmerge(defaultThemeConfig, theme || {}), [
    theme,
  ]);
  const currThemeColors = computedTheme.colors[mode];
  computedTheme.color = currThemeColors;
  return (
    <ColorModeContext.Provider value={[
      mode,
      setMode
    ]}>
      <ThemeProvider theme={computedTheme}>
        {children}
      </ThemeProvider>
      {/* <ColorModeContext.Consumer>
        {
          (nextTheme) => {
            console.log(nextTheme);
            return (
              <ThemeProvider theme={computedTheme}>
                {children}
              </ThemeProvider>
            );
          }
        }
      </ColorModeContext.Consumer> */}
    </ColorModeContext.Provider>
  );
};
