import React from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import deepmerge from 'deepmerge';
import { defaultThemeConfig } from '.';

export function ThemeProvider({ children, theme: propTheme }) {
  const computedTheme = React.useMemo(() => deepmerge(defaultThemeConfig, propTheme || {}), [
    propTheme,
  ]);
  return <SCThemeProvider theme={computedTheme}>{children}</SCThemeProvider>;
}
