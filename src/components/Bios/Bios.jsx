import React from 'react';
import PropTypes from 'prop-types';

import LazyImage from 'src/components/global/LazyImage';
import Markdown from 'src/components/global/Markdown';

import styles from './Bios.module.scss';

const Bios = ({ people }) => (
  <div className={styles.bios}>
    <ol className={styles.bios__list}>
      {people.map(({ name, pronouns, imagePath, position, about, website }) => (
        <li className={styles.bios__person} key={name}>
          <span>{name}</span>
          <span>{pronouns}</span>
          {imagePath && <LazyImage src={imagePath} alt={name} />}
          <span>{position}</span>
          <Markdown content={about} />
          {website && <Markdown content={website} />}
        </li>
      ))}
    </ol>
  </div>
);

Bios.propTypes = {
  people: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      pronouns: PropTypes.string.isRequired,
      imagePath: PropTypes.string,
      position: PropTypes.string.isRequired,
      about: PropTypes.string.isRequired,
      website: PropTypes.string,
    }).isRequired
  ).isRequired,
};

export default Bios;
