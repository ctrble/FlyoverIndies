import React from 'react';
import PropTypes from 'prop-types';
import { NextSeo } from 'next-seo';
import { v4 as uuidv4 } from 'uuid';

import ArcadeTemplate from 'src/components/global/templates/ArcadeTemplate';
import Markdown from 'src/components/global/Markdown';

import { fileContent } from 'src/lib/getContent';

const Membership = ({ pageIntro, pageContent }) => (
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
          showDivider
        />
      </section>
    )}

    {pageContent &&
      pageContent.length > 0 &&
      pageContent.map(({ content, frontmatter }, index) => (
        <section key={uuidv4()}>
          <Markdown
            content={content}
            frontmatter={frontmatter}
            showDivider={index !== pageContent.length - 1}
          />
        </section>
      ))}
  </>
);

Membership.propTypes = {
  pageIntro: PropTypes.shape({
    frontmatter: PropTypes.objectOf(PropTypes.string).isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  pageContent: PropTypes.arrayOf(PropTypes.object).isRequired,
};

// eslint-disable-next-line react/display-name
Membership.getLayout = (page) => <ArcadeTemplate>{page}</ArcadeTemplate>;

export async function getStaticProps() {
  const pageIntro = fileContent('static/membership', 'intro.md');
  const membership = fileContent('static/membership', 'membership.md');
  const organizers = fileContent('static/membership', 'organizers.md');
  const mentors = fileContent('static/membership', 'mentors.md');

  const pageContent = [membership, organizers, mentors];

  return {
    props: {
      pageIntro,
      pageContent,
    },
  };
}

export default Membership;
