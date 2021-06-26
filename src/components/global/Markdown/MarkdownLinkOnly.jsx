import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

import SiteLink from 'src/components/global/SiteLink';

const StripPTag = (props) => {
  // disable linters cause this is a dirty hack
  /* eslint-disable react/destructuring-assignment, react/prop-types, react/jsx-props-no-spreading */
  const element = props.children[0];

  /**
   * Brute force removal of the p tag and only return a link, otherwise bail out
   * and render the paragraph you shouldn't be using MarkdownLinkOnly for.
   */
  // workaround: https://github.com/rexxars/react-markdown/issues/184#issuecomment-522491275
  return element.type === 'a' ? (
    <SiteLink href={element.props.href} {...props}>
      {element.props.children}
    </SiteLink>
  ) : (
    <p {...props} />
  );
  /* eslint-enable react/destructuring-assignment, react/prop-types, react/jsx-props-no-spreading */
};

/**
 * This is a pretty specific component whose only job is to render a single
 * anchor tag from markdown. The react-markdown package assumes the link is
 * inside paragraph content, but if you're only sending it a link you shouldn't
 * have a paragraph or anything else to render.
 */
const MarkdownLinkOnly = ({ content }) => (
  <ReactMarkdown
    /* eslint-disable react/display-name, react/jsx-props-no-spreading, react/prop-types */
    components={{
      p: ({ node, children, ...props }) => (
        <StripPTag {...props}>{children}</StripPTag>
      ),
    }}

    /* eslint-enable react/display-name, react/jsx-props-no-spreading, react/prop-types */
  >
    {content}
  </ReactMarkdown>
);

MarkdownLinkOnly.propTypes = {
  content: PropTypes.string.isRequired,
};

export default MarkdownLinkOnly;
