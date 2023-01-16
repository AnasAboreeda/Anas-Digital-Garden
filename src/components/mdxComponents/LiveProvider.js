import * as React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

const ReactLiveProvider = ({ code }) => (
    <LiveProvider code={code}>
      <LiveEditor />
      <LiveError />
      <LivePreview />
    </LiveProvider>
);

export default ReactLiveProvider;
