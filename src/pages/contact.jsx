import React from 'react';
import PropTypes from 'prop-types';
import { NextSeo } from 'next-seo';

import ArcadeTemplate from 'src/components/global/templates/ArcadeTemplate';
import Markdown from 'src/components/global/Markdown';
import ContactForm from 'src/components/forms/ContactForm';

import { fileContent } from 'src/lib/getContent';

const Contact = ({ pageIntro }) => (
  <>
    <NextSeo
      title={pageIntro.frontmatter.title}
      description={pageIntro.frontmatter.description}
    />

    {pageIntro && (
      <section>
        <Markdown
          content={pageIntro.content}
          frontmatter={pageIntro.frontmatter}
        />
        <ContactForm />
      </section>
    )}
  </>
);

Contact.propTypes = {
  pageIntro: PropTypes.shape({
    frontmatter: PropTypes.objectOf(PropTypes.string).isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

// eslint-disable-next-line react/display-name
Contact.getLayout = (page) => <ArcadeTemplate>{page}</ArcadeTemplate>;

export async function getStaticProps() {
  const pageIntro = fileContent('static/contact', 'intro.md');

  return {
    props: {
      pageIntro,
    },
  };
}

export default Contact;
