import React from 'react';
import { RootWrapper } from './src/components/root-wrapper';

export const wrapRootElement = ({ element }, { theme }) => {
  return <RootWrapper theme={theme}>{element}</RootWrapper>;
};
