import React from 'react';
import { LiveConfig } from '@deer-ui/doc-generator/components';
import styled, * as sc from 'styled-components';
import * as UICore from '@deer-ui/core';

export default function Layout({ children }) {
  return (
    <>
      <LiveConfig
        modules={{
          react: React,
          '@deer-ui/core': UICore,
          'styled-components': Object.assign(styled, sc),
        }}
      />
      {children}
    </>
  );
}
