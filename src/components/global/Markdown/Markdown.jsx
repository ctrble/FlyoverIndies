import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown/with-html';

import styles from './Markdown.module.scss';

const Markdown = ({ content }) => (
  <ReactMarkdown
    className={styles.markdown}
    escapeHtml={false}
    source={content}
    linkTarget="_blank"
  />
);

Markdown.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Markdown;
