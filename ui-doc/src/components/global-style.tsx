import React from 'react';
// import { createGlobalStyle } from '@xstyled/styled-components';
// import { th } from '@xstyled/system';
// import { Normalize } from '@smooth-ui/core-sc';

import 'ukelli-ui/default.css';
import { createGlobalStyle } from 'styled-components';

const LocalGlobalStyle = createGlobalStyle`
  body {
    ${(p) => {
    console.log(p);
    return p.theme.color.body;
  }}
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

export function GlobalStyle() {
  return (
    <>
      <LocalGlobalStyle />
      {/* <Normalize />
      <LocalGlobalStyle /> */}
    </>
  );
}
