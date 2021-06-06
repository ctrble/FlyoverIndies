import React from 'react';
import PropTypes from 'prop-types';
import { NextSeo } from 'next-seo';
import dynamic from 'next/dynamic';

import ArcadeTemplate from 'src/components/global/templates/ArcadeTemplate';
import Markdown from 'src/components/global/Markdown';

import { fileContent } from 'src/lib/getContent';

const EventCalendar = dynamic(
  () => import('src/components/calendars/EventCalendar'),
  {
    ssr: false,
  }
);

const Events = ({ pageIntro }) => (
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

    <EventCalendar duration={{ days: 14 }} />
  </>
);

Events.propTypes = {
  pageIntro: PropTypes.shape({
    frontmatter: PropTypes.objectOf(PropTypes.string).isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

// eslint-disable-next-line react/display-name
Events.getLayout = (page) => <ArcadeTemplate>{page}</ArcadeTemplate>;

export async function getStaticProps() {
  const pageIntro = fileContent('static/events', 'intro.md');

  return {
    props: {
      pageIntro,
    },
  };
}

export default Events;
