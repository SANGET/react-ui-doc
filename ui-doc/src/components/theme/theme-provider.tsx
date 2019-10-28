import React from 'react';
import { ThemeProvider as SCThemeProvider, ThemeContext } from 'styled-components';
import deepmerge from 'deepmerge';
import { defaultThemeConfig } from '.';

export function ThemeProvider({ children, theme }) {
  return <SCThemeProvider theme={theme}>{children}</SCThemeProvider>;
}
