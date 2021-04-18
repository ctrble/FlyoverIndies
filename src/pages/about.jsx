import React from 'react';
import PropTypes from 'prop-types';
import { NextSeo } from 'next-seo';
import { v4 as uuidv4 } from 'uuid';
import { AwesomeButton } from 'react-awesome-button';
// import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss';

import Markdown from 'src/components/global/Markdown';
import ContactForm from 'src/components/forms/ContactForm';

import { fileContent } from 'src/lib/getContent';

const About = ({ about, codeOfConduct, joinUs }) => (
  <>
    <NextSeo
      title={about.frontmatter.title}
      description={about.frontmatter.description}
    />
    <main>
      <Markdown content={about.content} />
      <hr />
      {joinUs &&
        joinUs.length > 0 &&
        joinUs.map(({ content, frontmatter }) => (
          <section key={uuidv4()}>
            <Markdown content={content} />
            <AwesomeButton
              // cssModule={AwesomeButtonStyles}
              type="primary"
              href={frontmatter.link}
              target="_blank"
            >
              {frontmatter.cta}
            </AwesomeButton>
          </section>
        ))}
      <hr />
      <Markdown content={codeOfConduct.content} />
      <div>
        <h1>Get in touch</h1>
        <p>
          If you don&apos;t see a response, please be patient and check your
          junk folder (just in case). If you need to talk with us quickly,
          please reach out to us on our{' '}
          <a href="https://discord.gg/8JdcrkR">Discord</a>
        </p>
        <ContactForm />
      </div>
    </main>
  </>
);

About.propTypes = {
  about: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.object, PropTypes.string])
  ).isRequired,
  codeOfConduct: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.object, PropTypes.string])
  ).isRequired,
  joinUs: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export async function getStaticProps() {
  const about = fileContent('about', 'about-us.md');
  const codeOfConduct = fileContent('about', 'code-of-conduct.md');
  const membership = fileContent('about', 'membership.md');
  const organizers = fileContent('about', 'organizers.md');
  const mentors = fileContent('about', 'mentors.md');

  const joinUs = [membership, organizers, mentors];

  return {
    props: {
      about,
      codeOfConduct,
      joinUs,
    },
  };
}

export default About;
