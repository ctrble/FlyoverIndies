import React from 'react';
import PropTypes from 'prop-types';
import { NextSeo } from 'next-seo';
import { v4 as uuidv4 } from 'uuid';

import ArcadeTemplate from 'src/components/global/templates/ArcadeTemplate';
import Markdown from 'src/components/global/Markdown';

import { fileContent } from 'src/lib/getContent';

const Membership = ({ membershipContent }) => (
  <>
    <NextSeo
      title={membershipContent[0].frontmatter.title}
      description={membershipContent[0].frontmatter.description}
    />

    {membershipContent &&
      membershipContent.length > 0 &&
      membershipContent.map(({ content, frontmatter }, index) => (
        <section key={uuidv4()}>
          <Markdown
            content={content}
            frontmatter={frontmatter}
            showDivider={index !== membershipContent.length - 1}
          />
        </section>
      ))}
  </>
);

Membership.propTypes = {
  membershipContent: PropTypes.arrayOf(PropTypes.object).isRequired,
};

// eslint-disable-next-line react/display-name
Membership.getLayout = (page) => <ArcadeTemplate>{page}</ArcadeTemplate>;

export async function getStaticProps() {
  const membership = fileContent('membership', 'membership.md');
  const organizers = fileContent('membership', 'organizers.md');
  const mentors = fileContent('membership', 'mentors.md');

  const membershipContent = [membership, organizers, mentors];

  return {
    props: {
      membershipContent,
    },
  };
}

export default Membership;
