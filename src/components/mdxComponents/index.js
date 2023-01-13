import * as React from 'react';
import styled from '@emotion/styled';
import TeX from "@matejmazur/react-katex";

import CodeBlock from './codeBlock';
import AnchorTag from './anchor';

const StyledPre = styled('pre')`
  padding: 16px;
  background: ${(props) => props.theme.colors.preFormattedText};
`;

const appendString = (children) => {
  if (Array.isArray(children)) {
    return children.reduce((acc, current) => {
      if (typeof current === 'string') {
        return acc.concat(current);
      } else if (typeof current === 'object') {
        return acc.concat(current.props.children);
      } else {
        return acc;
      }
    }, '');
  } else {
    return children;
  }
};

export default {
  h1: (props) => (
    <h1
      className="heading1"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="heading2"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="heading3"
      {...props}
    />
  ),
  h4: (props) => (
    <h4
      className="heading4"
      {...props}
    />
  ),
  h5: (props) => (
    <h5
      className="heading5"
      {...props}
    />
  ),
  h6: (props) => (
    <h6
      className="heading6"
      {...props}
    />
  ),
  p: (props) => <p className="paragraph" {...props} />,
  pre: (props) => (
    <StyledPre>
      <pre {...props} />
    </StyledPre>
  ),
  code: CodeBlock,
  a: AnchorTag,
  div: (props) => {
    if (props.className.includes("math-display")) {
      // import("katex/dist/katex.min.css");
      return <TeX block math={props.children} />;
    }
    return <div {...props} />;
  },
  span: (props) => {
    if (props.className.includes("math-inline")) {
      // import("katex/dist/katex.min.css");
      return <TeX math={props.children} />;
    }
    return <span {...props} />;
  },
  // TODO add `img`
  // TODO add `blockquote`
  // TODO add `ul`
  // TODO add `li`
  // TODO add `table`
};
