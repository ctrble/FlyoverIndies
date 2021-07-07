import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ReactMarkdown from 'react-markdown';

import Button from 'src/components/global/Button';
import LazyImage from 'src/components/global/LazyImage';
import SiteLink from 'src/components/global/SiteLink';

import styles from './Markdown.module.scss';

const ParagraphOrImage = (props) => {
  // disable linters cause this is a dirty hack
  /* eslint-disable react/destructuring-assignment, react/prop-types, react/jsx-props-no-spreading */
  const element = props.children[0];

  /**
   * The react-markdown package nests images in paragraphs, which is not valid
   * html. This instead strips out the p tags and sends the image to LazyImage
   * to take it from there.
   */
  // workaround: https://github.com/rexxars/react-markdown/issues/184#issuecomment-522491275
  return element.type === 'img' ? (
    <LazyImage
      key={element.key}
      src={element.props.src}
      alt={element.props.alt}
    />
  ) : (
    <p {...props} />
  );
  /* eslint-enable react/destructuring-assignment, react/prop-types, react/jsx-props-no-spreading */
};

const Markdown = ({ content, frontmatter, showDivider, textSize }) => (
  <div className={styles.markdown}>
    <ReactMarkdown
      className={classnames(
        styles.markdown__content,
        textSize && styles[`markdown__content_${textSize}`]
      )}
      /* eslint-disable react/display-name, react/jsx-props-no-spreading, react/prop-types */
      components={{
        a: ({ node, children, href, ...props }) => (
          <SiteLink href={href} {...props}>
            {children}
          </SiteLink>
        ),
        hr: () => (
          <hr
            className={classnames(
              styles.markdown__divider,
              styles.markdown__divider_small
            )}
          />
        ),
        p: ({ node, ...props }) => <ParagraphOrImage {...props} />,
      }}
      /* eslint-enable react/display-name, react/jsx-props-no-spreading, react/prop-types */
    >
      {content}
    </ReactMarkdown>

    {frontmatter && frontmatter.ctaText && frontmatter.ctaLink && (
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
  textSize: PropTypes.oneOf(['small']),
};

Markdown.defaultProps = {
  frontmatter: null,
  showDivider: false,
  textSize: undefined,
};

export default Markdown;
