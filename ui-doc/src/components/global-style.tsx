import React from 'react';

import { createGlobalStyle, ThemeContext } from 'styled-components';
import '@deer-ui/core/default.css';

const LocalGlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.color.body};
    
    h1,h2,h3,h4,h5,h6 {
      margin-top: 25px;
      margin-bottom: 25px;
    }
  }
  pre {
    line-height: 1.5rem;
    .prism-code {
      padding: 15px;
    }
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
