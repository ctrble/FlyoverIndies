import React from 'react';
import PropTypes from 'prop-types';
import { NextSeo } from 'next-seo';
import dynamic from 'next/dynamic';

import ArcadeTemplate from 'src/components/global/templates/ArcadeTemplate';
import Markdown from 'src/components/global/Markdown';

import { fileContent } from 'src/lib/getContent';

const EventCalendar = dynamic(() => import('src/components/EventCalendar'), {
  ssr: false,
});

const Events = ({ eventsContent }) => (
  <>
    <NextSeo
      title={eventsContent.frontmatter.title}
      description={eventsContent.frontmatter.description}
    />

    <section>
      <Markdown
        content={eventsContent.content}
        frontmatter={eventsContent.frontmatter}
      />
    </section>

    <EventCalendar duration={{ weeks: 2 }} />
  </>
);

Events.propTypes = {
  eventsContent: PropTypes.shape({
    frontmatter: PropTypes.objectOf(PropTypes.string).isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

// eslint-disable-next-line react/display-name
Events.getLayout = (page) => <ArcadeTemplate>{page}</ArcadeTemplate>;

export async function getStaticProps() {
  const intro = fileContent('events', 'intro.md');

  const eventsContent = intro;

  return {
    props: {
      eventsContent,
    },
  };
}

export default Events;
