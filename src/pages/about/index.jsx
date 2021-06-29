import React from 'react';
import PropTypes from 'prop-types';
import { NextSeo } from 'next-seo';

import ArcadeTemplate from 'src/components/global/templates/ArcadeTemplate';
import Markdown from 'src/components/global/Markdown';

import { directoryContent, fileContent } from 'src/lib/getContent';

const About = ({ pageIntro, codeOfConduct, press }) => (
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

    <section>
      <Markdown
        content={codeOfConduct.content}
        frontmatter={codeOfConduct.frontmatter}
        showDivider
      />
    </section>

    <section>
      <Markdown
        content={press.content}
        frontmatter={press.frontmatter}
        showDivider
      />
    </section>
  </>
);

About.propTypes = {
  pageIntro: PropTypes.shape({
    frontmatter: PropTypes.objectOf(PropTypes.string).isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  codeOfConduct: PropTypes.shape({
    frontmatter: PropTypes.objectOf(PropTypes.string).isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  press: PropTypes.shape({
    frontmatter: PropTypes.objectOf(PropTypes.string).isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

// eslint-disable-next-line react/display-name
About.getLayout = (page) => <ArcadeTemplate>{page}</ArcadeTemplate>;

export async function getStaticProps() {
  const pageIntro = fileContent('static/about', 'intro.md');
  const codeOfConduct = fileContent('static/about', 'code-of-conduct.md');
  const press = fileContent('static/about', 'press.md');

  const bios = directoryContent('static/about/bios');

  return {
    props: {
      pageIntro,
      codeOfConduct,
      press,
      bios,
    },
  };
}

export default About;
