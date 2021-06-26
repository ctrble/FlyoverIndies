import React from 'react';
import PropTypes from 'prop-types';
import { FiExternalLink } from 'react-icons/fi';

import LazyImage from 'src/components/global/LazyImage';
import Markdown from 'src/components/global/Markdown';
import MarkdownLinkOnly from 'src/components/global/Markdown/MarkdownLinkOnly';

import styles from './Bios.module.scss';

const Bios = ({ people }) => (
  <div className={styles.bios}>
    <ol className={styles.bios__list}>
      {people.map(({ name, pronouns, imagePath, position, about, website }) => (
        <li className={styles.bios__person} key={name}>
          {imagePath && (
            <LazyImage
              src={imagePath}
              alt={name}
              className={styles.bios__image}
            />
          )}

          <div className={styles.bios__whoWrapper}>
            <h2 className={styles.bios__name}>{name}</h2>
            <span className={styles.bios__pronouns}>{pronouns}</span>
          </div>

          <span className={styles.bios__position}>{position}</span>

          <Markdown content={about} />

          {website && (
            <div className={styles.bios__websiteWrapper}>
              <FiExternalLink title={`${name}'s offsite link`} />
              <span className={styles.bios__website}>
                <MarkdownLinkOnly content={website} />
              </span>
            </div>
          )}
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
