import React from 'react';
import { RootWrapper } from './src/components/root-wrapper';

export const wrapRootElement = ({ element }, { theme }) => {
  return <RootWrapper theme={theme}>{element}</RootWrapper>;
};

export const onRenderBody = (
  { setPreBodyComponents, setPostBodyComponents },
  { algoliaDocSearch },
) => {
  setPostBodyComponents([
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.3.1/css/all.min.css" />
    </>,
  ]);
  if (algoliaDocSearch) {
    setPostBodyComponents([
      <>
        <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js"
        />
      </>,
    ]);
  }
};
