import React from 'react';
import PropTypes from 'prop-types';
import { NextSeo } from 'next-seo';

import ArcadeTemplate from 'src/components/global/templates/ArcadeTemplate';
import Markdown from 'src/components/global/Markdown';

import { fileContent } from 'src/lib/getContent';

const Friends = ({ friendsContent }) => (
  <>
    <NextSeo
      title={friendsContent.frontmatter.title}
      description={friendsContent.frontmatter.description}
    />

    <section>
      <Markdown
        content={friendsContent.content}
        frontmatter={friendsContent.frontmatter}
      />
    </section>
  </>
);

// eslint-disable-next-line react/display-name
Friends.getLayout = (page) => <ArcadeTemplate>{page}</ArcadeTemplate>;

Friends.propTypes = {
  friendsContent: PropTypes.shape({
    frontmatter: PropTypes.objectOf(PropTypes.string).isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

// eslint-disable-next-line react/display-name
Friends.getLayout = (page) => <ArcadeTemplate>{page}</ArcadeTemplate>;

export async function getStaticProps() {
  const intro = fileContent('friends', 'friends-list.md');

  const friendsContent = intro;

  return {
    props: {
      friendsContent,
    },
  };
}

export default Friends;
