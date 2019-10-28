import React from 'react';
import { LiveConfig } from '@fox-ui/doc/components';
import styled, * as sc from 'styled-components';
import * as ukelliCore from 'ukelli-ui/core';

export default function Layout({ children }) {
  return (
    <>
      <LiveConfig
        modules={{
          react: React,
          'ukelli-ui/core': ukelliCore,
          'styled-components': Object.assign(styled, sc),
        }}
      />
      {children}
    </>
  );
}
