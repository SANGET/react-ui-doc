import React from 'react';
import {
  LiveProvider, LivePreview, LiveError, LiveEditor
} from 'react-live';
import { Code } from './code';

export function Playground(props) {
  const showLivePreview = true;
  const showingCode = true;
  const showLiveError = false;
  return (
    <LiveProvider
      code={code}
      scope={scope}
      transformCode={transformCode}
      language={language}
      theme={theme}
    >
      <div>
        <div>
          {showLivePreview && (
            <LivePreview data-testid="live-preview" />
          )}
        </div>
        <div>
          <button onClick={copyCode}>
            <Icons.Clipboard size={12} />
          </button>
          <button onClick={toggleCode}>
            <Icons.Code size={12} />
          </button>
        </div>
      </div>
      {showLiveError && (
        <LiveError data-testid="live-error" />
      )}
      {showingCode && (
        <div>
          <LiveEditor data-testid="live-editor" />
        </div>
      )}
    </LiveProvider>
  );
}
// export function Playground(props) {
//   return <Code language="jsx" live {...props} />;
// }
