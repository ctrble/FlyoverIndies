import React from 'react';
import PropTypes from 'prop-types';
import { NextSeo } from 'next-seo';
import { v4 as uuidv4 } from 'uuid';

import ArcadeTemplate from 'src/components/global/templates/ArcadeTemplate';
import Markdown from 'src/components/global/Markdown';
import ContactForm from 'src/components/forms/ContactForm';

import { fileContent } from 'src/lib/getContent';

const About = ({ aboutContent }) => (
  <>
    <NextSeo
      title={aboutContent[0].frontmatter.title}
      description={aboutContent[0].frontmatter.description}
    />

    {aboutContent &&
      aboutContent.length > 0 &&
      aboutContent.map(({ content, frontmatter }, index) => (
        <section key={uuidv4()}>
          <Markdown
            content={content}
            frontmatter={frontmatter}
            showDivider={index !== aboutContent.length - 1}
          />
        </section>
      ))}

    <div>
      <ContactForm />
    </div>
  </>
);

About.propTypes = {
  aboutContent: PropTypes.arrayOf(PropTypes.object).isRequired,
};

// eslint-disable-next-line react/display-name
About.getLayout = (page) => <ArcadeTemplate>{page}</ArcadeTemplate>;

export async function getStaticProps() {
  const about = fileContent('about', 'about-us.md');
  const codeOfConduct = fileContent('about', 'code-of-conduct.md');
  const contact = fileContent('about', 'contact-us.md');

  const aboutContent = [about, codeOfConduct, contact];

  return {
    props: {
      aboutContent,
      // about,
      // codeOfConduct,
    },
  };
}

export default About;
