## Slow start

> Create required files step by step

Setup npm project first

```shell
mkdir projectName && cd "$_"
npm init
```

Add edit package.json like this:

```json
{
  "name": "gatsby-react-ui-doc",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "gatsby develop --host 0.0.0.0 --port 9999",
    "build": "gatsby build",
    "clean": "gatsby clean",
    "serve": "gatsby serve"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "eslint": "^6.5.1",
    "eslint-config-airbnb": "^18.0.1",
    "eslint-config-react-app": "^5.0.2",
    "eslint-loader": "3.0.2",
    "eslint-plugin-flowtype": "4.3.0",
    "eslint-plugin-import": "2.18.2",
    "eslint-plugin-jsx-a11y": "6.2.3",
    "eslint-plugin-react": "7.16.0",
    "eslint-plugin-react-hooks": "^2.1.2"
  },
  "dependencies": {
    "@mini-code/base-func": "^1.1.0",
    "gatsby": "^2.18.5",
    "gatsby-plugin-layout": "^1.1.16",
    "react-ui-doc": "^1.0.0-rc1.2",
    "react": "^16.10.1",
    "react-dom": "^16.10.1"
  }
}
```

## Add required files

Files Strurcture preview

```treeview
gatsby-config.js
package.json
src/
|-- components/
|   |-- layout.js
|-- images/
|   |-- logo.png
|-- pages/
|   |-- index.mdx
|   |-- docs/
|   |   |-- index.mdx
|-- etc.
```

## Add Gatsby config

Create `gatsby-config.js` file and edit it like this:

```js
module.exports = {
  plugins: [
    {
      resolve: "react-ui-doc",
      options: {
        name: 'react-ui-doc', // Project name
        slug: 'react-ui-doc', // Project slug
        github: 'https://github.com/SANGET/react-ui-doc',
        siteUrl: 'https://react-ui-doc.thinkmore.xyz',
        author: 'You',
        menu: [
          'Getting Started',
        ], // Menu ordering
        nav: [
          { title: 'Docs', url: '/docs/' },
        ], // Side pages navigation
        docPath: `${__dirname}/src/pages/docs`, // store doc files
        pagePath: `${__dirname}/src/pages`, // store side pages
        imagePath: `${__dirname}/src/images`, // store side images, required `logo.png`
        analytics: {
          trackingId: `UA-111111111-1`,
          head: false,
        },
        theme: {
          defaultMode: 'light',
          colors: {
            light: {
              body: '#FFF'
            },
            dark: {
              body: '#000'
            }
          }
        } // theme config
      },
    },

    // custom layout config, required
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve(`./src/components/layout`),
      }
    }
  ],
};
```

## Create costom Layout

Create `src/components/layout.js`

```treeview
src/
|-- components/
|   |-- layout.js
```

And provide the dependency to Docs, see [https://github.com/FormidableLabs/react-live](https://github.com/FormidableLabs/react-live) for more detail.

```js
import React from 'react';
import { LiveConfig } from 'react-ui-doc/components';
import styled, * as sc from 'styled-components';
import * as UICore from '@deer-ui/core';
import * as EnhanceUI from '@deer-ui/enhance-ui';
import * as UIUtils from '@deer-ui/core/utils';
import * as BaseFunc from '@mini-code/base-func';

import './style.css';

export default function Layout({ children }) {
  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/themes/airbnb.css" />
      <LiveConfig
        modules={{
          react: React,
          '@deer-ui/core': UICore,
          '@deer-ui/enhance-ui': EnhanceUI,
          '@deer-ui/core/utils': UIUtils,
          '@mini-code/base-func': BaseFunc,
          'styled-components': Object.assign(styled, sc),
        }}
      />
      {children}
    </>
  );
}
```

## Create page

So that we can create page by .mdx

Create `src/pages/index.mdx`

```treeview
src/
|-- pages/
|   |-- index.mdx
```

```md
---
title: homepage
menu: Index
order: 0
---

# HomePage

Any content here.
```

## Run up

```shell
yarn start
```

And then open `http://localhost:5555`

## Example

More detail see [Alert](/docs/alert/)
