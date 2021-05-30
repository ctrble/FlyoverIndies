import React from 'react';
import PropTypes from 'prop-types';
import { NextSeo } from 'next-seo';
import { v4 as uuidv4 } from 'uuid';

import ArcadeTemplate from 'src/components/global/templates/ArcadeTemplate';
import Markdown from 'src/components/global/Markdown';

import { fileContent } from 'src/lib/getContent';

const Store = ({ storeContent }) => {
  const isBetweenSections = (index) => index !== storeContent.length - 1;
  return (
    <>
      <NextSeo
        title={storeContent[0].frontmatter.title}
        description={storeContent[0].frontmatter.description}
      />

      {storeContent &&
        storeContent.length > 0 &&
        storeContent.map(({ content, frontmatter }, index) => (
          <section key={uuidv4()}>
            <Markdown
              content={content}
              frontmatter={frontmatter}
              showDivider={isBetweenSections(index)}
            />
          </section>
        ))}
    </>
  );
};

// eslint-disable-next-line react/display-name
Store.getLayout = (page) => <ArcadeTemplate>{page}</ArcadeTemplate>;

Store.propTypes = {
  storeContent: PropTypes.arrayOf(PropTypes.object).isRequired,
};

// eslint-disable-next-line react/display-name
Store.getLayout = (page) => <ArcadeTemplate>{page}</ArcadeTemplate>;

export async function getStaticProps() {
  const intro = fileContent('store', 'store.md');
  const celebrationTee = fileContent('store', 'celebration-tee.md');

  const storeContent = [intro, celebrationTee];

  return {
    props: {
      storeContent,
    },
  };
}

export default Store;
