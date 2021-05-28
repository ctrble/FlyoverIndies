import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

import Button from 'src/components/global/Button';
import SiteLink from 'src/components/global/SiteLink';

import styles from './Markdown.module.scss';

const Markdown = ({ content, frontmatter, showDivider }) => (
  <div className={styles.markdown}>
    <ReactMarkdown
      className={styles.markdown__content}
      /* eslint-disable react/display-name, react/jsx-props-no-spreading, react/prop-types */
      components={{
        a: ({ node, children, href, ...props }) => (
          <SiteLink href={href} {...props}>
            {children}
          </SiteLink>
        ),
      }}
      /* eslint-enable react/display-name, react/jsx-props-no-spreading, react/prop-types */
    >
      {content}
    </ReactMarkdown>

    {frontmatter.ctaText && frontmatter.ctaLink && (
      <div className={styles.markdown__cta}>
        <Button href={frontmatter.ctaLink}>{frontmatter.ctaText}</Button>
      </div>
    )}

    {showDivider && <hr className={styles.markdown__divider} />}
  </div>
);

Markdown.propTypes = {
  content: PropTypes.string.isRequired,
  frontmatter: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
    ctaText: PropTypes.string,
    ctaLink: PropTypes.string,
  }),
  showDivider: PropTypes.bool,
};

Markdown.defaultProps = {
  frontmatter: PropTypes.shape({
    title: null,
    description: null,
    date: null,
    ctaText: null,
    ctaLink: null,
  }),
  showDivider: false,
};

export default Markdown;
