import React from 'react';

import 'ukelli-ui/default.css';
import { createGlobalStyle, ThemeContext } from 'styled-components';

const LocalGlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.color.body}
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
