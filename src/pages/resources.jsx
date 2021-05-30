import React from 'react';
import PropTypes from 'prop-types';
import { NextSeo } from 'next-seo';
import { v4 as uuidv4 } from 'uuid';

import ArcadeTemplate from 'src/components/global/templates/ArcadeTemplate';
import Markdown from 'src/components/global/Markdown';

import { fileContent } from 'src/lib/getContent';

const Resources = ({ resourcesContent }) => {
  const isBetweenSections = (index) => index !== resourcesContent.length - 1;
  return (
    <>
      <NextSeo
        title={resourcesContent[0].frontmatter.title}
        description={resourcesContent[0].frontmatter.description}
      />

      {resourcesContent &&
        resourcesContent.length > 0 &&
        resourcesContent.map(({ content, frontmatter }, index) => (
          <section key={uuidv4()}>
            <Markdown
              content={content}
              frontmatter={frontmatter}
              showDivider={isBetweenSections(index)}
            />
          </section>
        ))}
    </>
  );
};

Resources.propTypes = {
  resourcesContent: PropTypes.arrayOf(PropTypes.object).isRequired,
};

// eslint-disable-next-line react/display-name
Resources.getLayout = (page) => <ArcadeTemplate>{page}</ArcadeTemplate>;

export async function getStaticProps() {
  const intro = fileContent('resources', 'intro.md');
  const resources = fileContent('resources', 'resources.md');

  const resourcesContent = [intro, resources];

  return {
    props: {
      resourcesContent,
    },
  };
}

export default Resources;
