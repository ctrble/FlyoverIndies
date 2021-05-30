import React from 'react';
import PropTypes from 'prop-types';
import { NextSeo } from 'next-seo';

import ArcadeTemplate from 'src/components/global/templates/ArcadeTemplate';
import Markdown from 'src/components/global/Markdown';

import { fileContent } from 'src/lib/getContent';

const Store = ({ storeContent }) => (
  <>
    <NextSeo
      title={storeContent.frontmatter.title}
      description={storeContent.frontmatter.description}
    />

    <section>
      <Markdown
        content={storeContent.content}
        frontmatter={storeContent.frontmatter}
      />
    </section>
  </>
);

// eslint-disable-next-line react/display-name
Store.getLayout = (page) => <ArcadeTemplate>{page}</ArcadeTemplate>;

Store.propTypes = {
  storeContent: PropTypes.shape({
    frontmatter: PropTypes.objectOf(PropTypes.string).isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

// eslint-disable-next-line react/display-name
Store.getLayout = (page) => <ArcadeTemplate>{page}</ArcadeTemplate>;

export async function getStaticProps() {
  const intro = fileContent('store', 'store.md');

  const storeContent = intro;

  return {
    props: {
      storeContent,
    },
  };
}

export default Store;