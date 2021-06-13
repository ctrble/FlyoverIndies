import React from 'react';
import PropTypes from 'prop-types';
import { NextSeo } from 'next-seo';
import dynamic from 'next/dynamic';

import ArcadeTemplate from 'src/components/global/templates/ArcadeTemplate';
import Markdown from 'src/components/global/Markdown';
import SocialLinks from 'src/components/SocialLinks';

import { fileContent } from 'src/lib/getContent';

const NextEvent = dynamic(() => import('src/components/calendars/NextEvent'), {
  ssr: false,
});

const Home = ({ pageIntro, eventsContent, onlineContent }) => (
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
        content={onlineContent.content}
        frontmatter={onlineContent.frontmatter}
      />
      <SocialLinks />
    </section>

    <section>
      <Markdown
        content={eventsContent.content}
        frontmatter={eventsContent.frontmatter}
      />
      <NextEvent />
    </section>
  </>
);

// eslint-disable-next-line react/display-name
Home.getLayout = (page) => <ArcadeTemplate>{page}</ArcadeTemplate>;

Home.propTypes = {
  pageIntro: PropTypes.shape({
    frontmatter: PropTypes.objectOf(PropTypes.string).isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  eventsContent: PropTypes.shape({
    frontmatter: PropTypes.objectOf(PropTypes.string).isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  onlineContent: PropTypes.shape({
    frontmatter: PropTypes.objectOf(PropTypes.string).isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  // pageContent: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export async function getStaticProps() {
  const pageIntro = fileContent('static/home', 'intro.md');
  const eventsContent = fileContent('static/home', 'events.md');
  const onlineContent = fileContent('static/home', 'online.md');
  // const mentors = fileContent('static/home', 'mentors.md');

  // const pageContent = [membership, organizers, mentors];

  return {
    props: {
      pageIntro,
      eventsContent,
      onlineContent,
      // pageContent,
    },
  };
}

export default Home;
