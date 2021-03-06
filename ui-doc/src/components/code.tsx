import React, { useState } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview as BaseLivePreview,
} from 'react-live';
import { mdx } from '@mdx-js/react';
import { Icon, ToolTip } from '@deer-ui/core';
import getPrismTheme from './prism/prism-theme';
import { useColorMode } from './theme';

const Editor = styled.div`
  padding: 15px 20px;
  margin-bottom: 25px;
  overflow: auto;
  font-size: 14px;
  line-height: 1.45rem;
  overflow-y: auto;
  margin-top: 0;
  white-space: normal;

  > textarea:focus {
    outline: none;
  }
`;

const LivePreview = styled(BaseLivePreview)`
  padding: 15px 20px;
  margin: 25px 0 0;
  border: 1px rgba(0,0,0, 0.1) solid;
  border-image: initial;
  background-color: ${({ theme }) => theme.color['secondary-bg']};
  border-radius: 3px;
  font-family: -apple-system,BlinkMacSystemFont,'Segoe UI','PingFang SC','Hiragino Sans GB','Microsoft YaHei','Helvetica Neue',Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';

  & + ${Editor} {
    margin-top: 10px;
  }
`;

const PreviewHelper = styled.div`
  padding: 10px 20px;
  border: 1px solid #EEE;
  border-top: none;
  background-color: ${({ theme }) => theme.color['secondary-bg']};
  border-radius: 3px;
  /* text-align: right; */
`;

const ToolTip2 = styled(ToolTip)`
  .icon {
    color: #AAA;
  }
`;

const globalModules = {
  react: 'React',
};

export function LiveConfig({ modules }) {
  Object.assign(globalModules, modules);
  return null;
}

function req(path) {
  const dep = globalModules[path];

  if (!dep) {
    throw new Error(`Unable to resolve path to module '${path}'.`);
  }
  return dep;
}

function importToRequire(code) {
  let _code = `/** @jsx mdx */\n${code}`;
  _code = _code
    // { a as b } => { a: b }
    .replace(/([0-9a-z_$]+) as ([0-9a-z_$]+)/gi, '$1: $2')
    // import { a } from "a" => const { a } = require("b")
    .replace(
      /import {([^}]+)} from ([^\s;]+);?/g,
      'const {$1} = require($2);',
    )
    // import a from "a" => const a = require("a").default || require("a")
    .replace(
      /import ([\S]+) from ([^\s;]+);?/g,
      'const $1 = require($2).default || require($2);',
    )
    // import * as a from "a"
    .replace(
      /import \* as ([\S]+) from ([^\s;]+);?/g,
      'const $1 = require($2);',
    )
    // import a from "a" => const a = require("a").default || require("a")
    .replace(
      /import (.+),\s?{([^}]+)} from ([^\s;]+);?/g,
      [
        'const $1 = require($3).default || require($3);',
        'const {$2} = require($3);',
      ].join('\n'),
    );
  return _code;
}

export function usePrismTheme() {
  const [mode] = useColorMode();
  return getPrismTheme({ mode });
}

const EditorPreviewWrapper = (props) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div>
      <PreviewHelper>
        <ToolTip2
          clickToClose
          n="code"
          title={`${isShow ? "Hide" : "Show"} code`}
          position="right"
          onClick={(e) => {
            setIsShow(!isShow);
          }} />
      </PreviewHelper>
      {
        isShow && (
          <Editor as={LiveEditor} {...props} style={{
            fontFamily: `Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace`
          }} />
        )
      }
    </div>
  );
};

export interface CodeProps {
  language: Language;
  live?: boolean;
  render?: boolean;
  noInline?: boolean;
  children: string;
}

export const Code: React.SFC<CodeProps> = ({
  children, language = 'jsx', live, noInline, render
}) => {
  const code = children.trim();
  const prismTheme = usePrismTheme();
  if (live) {
    return (
      <LiveProvider
        code={code}
        transformCode={importToRequire}
        scope={{ mdx, require: req }}
        language={language}
        theme={prismTheme}
        noInline={noInline}
      >
        <LivePreview />
        <LiveError />
        <EditorPreviewWrapper />
        {/* <PreviewHelper>
          <Icon n="code" />
        </PreviewHelper>
        <Editor as={LiveEditor} /> */}
      </LiveProvider>
    );
  }

  if (render) {
    return (
      <div style={{ marginTop: '40px' }}>
        <LiveProvider code={code}>
          <LivePreview />
        </LiveProvider>
      </div>
    );
  }

  return (
    <Highlight
      {...defaultProps}
      code={code}
      language={language}
      theme={prismTheme}
    >
      {({
        className, style, tokens, getLineProps, getTokenProps
      }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
