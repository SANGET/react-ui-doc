import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider } from './theme-provider';
import { GlobalStyle } from './global-style';
import { Code } from './code';

const components = {
  code: ({ children, className, ...props }) => {
    const lang = className && className.split('-')[1];
    return (
      <Code lang={lang} {...props}>
        {children}
      </Code>
    );
  },
};

export function RootWrapper({ children, theme }) {
  return (
    <ThemeProvider theme={theme}>
      <MDXProvider components={components}>
        <>
          <GlobalStyle />
          {children}
        </>
      </MDXProvider>
    </ThemeProvider>
  );
}
