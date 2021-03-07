import React from 'react';
import PropTypes from 'prop-types';
import { NextSeo } from 'next-seo';
import ReactMarkdown from 'react-markdown/with-html';

import { fileContent } from 'src/lib/getContent';

const About = ({ about, codeOfConduct }) => (
  <>
    <NextSeo
      title={about.frontmatter.title}
      description={about.frontmatter.description}
    />
    <main>
      <ReactMarkdown
        escapeHtml={false}
        source={about.content}
        linkTarget="_blank"
      />
      <br />
      <br />
      <br />
      <br />
      <ReactMarkdown
        escapeHtml={false}
        source={codeOfConduct.content}
        linkTarget="_blank"
      />
    </main>
  </>
);

About.propTypes = {
  about: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  codeOfConduct: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export async function getStaticProps() {
  const about = fileContent('about', 'about-us.md');
  const codeOfConduct = fileContent('about', 'code-of-conduct.md');

  return {
    props: {
      about,
      codeOfConduct,
    },
  };
}

export default About;
