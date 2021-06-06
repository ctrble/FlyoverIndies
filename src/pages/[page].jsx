import React from 'react';
import PropTypes from 'prop-types';
import { NextSeo } from 'next-seo';

import ArcadeTemplate from 'src/components/global/templates/ArcadeTemplate';
import Markdown from 'src/components/global/Markdown';

import { fileContent, directorySlugs } from 'src/lib/getContent';

const Page = ({ pageContent }) => (
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

Page.propTypes = {
  pageContent: PropTypes.shape({
    frontmatter: PropTypes.objectOf(PropTypes.string).isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

// eslint-disable-next-line react/display-name
Page.getLayout = (page) => <ArcadeTemplate>{page}</ArcadeTemplate>;

export async function getStaticPaths() {
  const pageSlugs = directorySlugs('dynamic');
  const paths = pageSlugs.map((page) => ({
    params: {
      page,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { page } }) {
  const pageContent = fileContent('dynamic', `${page}.md`);

  return {
    props: {
      pageContent,
    },
  };
}

export default Page;
