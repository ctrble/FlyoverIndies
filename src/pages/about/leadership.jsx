import React from 'react';
import PropTypes from 'prop-types';
import { NextSeo } from 'next-seo';

import ArcadeTemplate from 'src/components/global/templates/ArcadeTemplate';
import Markdown from 'src/components/global/Markdown';
import Bios from 'src/components/Bios';

import getSheets from 'src/lib/getSheets';
import { fileContent } from 'src/lib/getContent';

const Leadership = ({ pageIntro, people }) => (
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

      <Bios people={people} />
    </section>
  </>
);

Leadership.propTypes = {
  pageIntro: PropTypes.shape({
    frontmatter: PropTypes.objectOf(PropTypes.string).isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  people: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      pronouns: PropTypes.string.isRequired,
      imagePath: PropTypes.string,
      position: PropTypes.string.isRequired,
      about: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

// eslint-disable-next-line react/display-name
Leadership.getLayout = (page) => <ArcadeTemplate>{page}</ArcadeTemplate>;

export async function getStaticProps() {
  const pageIntro = fileContent('static/about/leadership', 'intro.md');
  const people = await getSheets();

  return {
    props: {
      pageIntro,
      people,
    },
  };
}

export default Leadership;
