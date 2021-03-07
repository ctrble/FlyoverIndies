import React from 'react';
import PropTypes from 'prop-types';
import { NextSeo } from 'next-seo';
import ReactMarkdown from 'react-markdown/with-html';
import { AwesomeButton } from 'react-awesome-button';

// import 'react-awesome-button/dist/styles.css';
// import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss';

import { fileContent } from 'src/lib/getContent';

const About = ({ about, codeOfConduct, membership, organizers, mentors }) => (
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
      <hr />
      <ReactMarkdown
        escapeHtml={false}
        source={codeOfConduct.content}
        linkTarget="_blank"
      />
      <hr />
      <ReactMarkdown
        escapeHtml={false}
        source={membership.content}
        linkTarget="_blank"
      />
      <AwesomeButton
        type="primary"
        href={membership.frontmatter.link}
        target="_blank"
      >
        {membership.frontmatter.cta}
      </AwesomeButton>
      <hr />
      <ReactMarkdown
        escapeHtml={false}
        source={organizers.content}
        linkTarget="_blank"
      />
      <hr />
      <ReactMarkdown
        escapeHtml={false}
        source={mentors.content}
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
  membership: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      cta: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }).isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  organizers: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  mentors: PropTypes.shape({
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
  const membership = fileContent('about', 'membership.md');
  const organizers = fileContent('about', 'organizers.md');
  const mentors = fileContent('about', 'mentors.md');

  return {
    props: {
      about,
      codeOfConduct,
      membership,
      organizers,
      mentors,
    },
  };
}

export default About;
