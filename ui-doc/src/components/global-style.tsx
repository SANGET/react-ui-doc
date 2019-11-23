import React from 'react';

import '@deer-ui/core/default.css';
import { createGlobalStyle, ThemeContext } from 'styled-components';

const LocalGlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.color.body};
  }
  pre {
    white-space: normal;
  }
  a {
    color: inherit;
    text-decoration: none;

    :hover {
      /* color: #CCC; */
      text-decoration: none;
    }
  }
`;

export function GlobalStyle(props) {
  return (
    <>
      <LocalGlobalStyle />
    </>
  );
}
