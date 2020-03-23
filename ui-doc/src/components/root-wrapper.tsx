import React, { useRef } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { ColorThemeProvider } from './theme';
import { GlobalStyle } from './global-style';
import { Code } from './code';

const components = {
  code: ({ children, className, ...props }) => {
    const language = className && className.split('-')[1];
    return (
      <Code language={language} {...props}>
        {children}
      </Code>
    );
  },
};

export function RootWrapper({ children, theme }) {
  return (
    <ColorThemeProvider theme={theme}>
      <MDXProvider components={components}>
        <>
          <GlobalStyle />
          {children}
        </>
      </MDXProvider>
    </ColorThemeProvider>
  );
}
