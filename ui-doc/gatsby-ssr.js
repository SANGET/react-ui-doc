import React from 'react';
import { RootWrapper } from './components';

export const wrapRootElement = ({ element }, { theme }) => {
  return <RootWrapper theme={theme}>{element}</RootWrapper>;
};

export const onRenderBody = (
  { setPreBodyComponents, setPostBodyComponents },
  { algoliaDocSearch },
) => {
  setPostBodyComponents([
    <link key="1" rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.11.1/css/all.min.css" />,
    // <link key="2" rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/themes/airbnb.css" />
  ]);
  if (algoliaDocSearch) {
    setPostBodyComponents([
      <script key="1"
        type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js"
      />
    ]);
  }
};
