import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown/with-html';

const Markdown = ({ content }) => (
  <ReactMarkdown escapeHtml={false} source={content} linkTarget="_blank" />
);

Markdown.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Markdown;
