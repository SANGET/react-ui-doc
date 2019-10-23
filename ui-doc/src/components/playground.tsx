import React from 'react';
import { Code } from './code';

export function Playground(props) {
  return <Code lang="jsx" live {...props} />;
}
