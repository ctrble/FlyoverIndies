import React from 'react';
import PropTypes from 'prop-types';
import { NextSeo } from 'next-seo';

import ArcadeTemplate from 'src/components/global/templates/ArcadeTemplate';
import Markdown from 'src/components/global/Markdown';

import { fileContent } from 'src/lib/getContent';

const Resources = ({ pageContent }) => (
  <>
    <NextSeo
      title={pageContent.frontmatter.title}
      description={pageContent.frontmatter.description}
    />

    <section>
      <Markdown
        content={pageContent.content}
        frontmatter={pageContent.frontmatter}
      />
    </section>
  </>
);

Resources.propTypes = {
  pageContent: PropTypes.shape({
    frontmatter: PropTypes.objectOf(PropTypes.string).isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

// eslint-disable-next-line react/display-name
Resources.getLayout = (page) => <ArcadeTemplate>{page}</ArcadeTemplate>;

export async function getStaticProps() {
  const pageContent = fileContent('dynamic/resources', 'page.md');

  return {
    props: {
      pageContent,
    },
  };
}

export default Resources;
