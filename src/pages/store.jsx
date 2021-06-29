import React from 'react';
import PropTypes from 'prop-types';
import { NextSeo } from 'next-seo';
import { v4 as uuidv4 } from 'uuid';

import ArcadeTemplate from 'src/components/global/templates/ArcadeTemplate';
import Markdown from 'src/components/global/Markdown';

import { fileContent } from 'src/lib/getContent';

const Store = ({ pageIntro, pageContent }) => (
  <>
    <NextSeo
      title={pageIntro.frontmatter.title}
      description={pageIntro.frontmatter.description}
    />

    <section>
      <Markdown
        content={pageIntro.content}
        frontmatter={pageIntro.frontmatter}
        showDivider
      />
    </section>

    {pageContent &&
      pageContent.length > 0 &&
      pageContent.map(({ content, frontmatter }, index) => (
        <section key={uuidv4()}>
          <Markdown
            content={content}
            frontmatter={frontmatter}
            showDivider={index !== pageContent.length - 1}
          />
        </section>
      ))}
  </>
);

// eslint-disable-next-line react/display-name
Store.getLayout = (page) => <ArcadeTemplate>{page}</ArcadeTemplate>;

Store.propTypes = {
  pageIntro: PropTypes.shape({
    frontmatter: PropTypes.objectOf(PropTypes.string).isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  pageContent: PropTypes.arrayOf(PropTypes.object).isRequired,
};

// eslint-disable-next-line react/display-name
Store.getLayout = (page) => <ArcadeTemplate>{page}</ArcadeTemplate>;

export async function getStaticProps() {
  const pageIntro = fileContent('static/store', 'intro.md');
  const celebrationTee = fileContent('static/store', 'celebration-tee.md');

  const pageContent = [celebrationTee];

  return {
    props: {
      pageIntro,
      pageContent,
    },
  };
}

export default Store;
