import React from 'react';

import styles from './CovidTracker.module.scss';

const CovidTracker = () => (
  <div className={styles.tracker}>
    <iframe
      src="https://www.covidactnow.org/embed/us/fips/28140"
      title="CoVid Act Now"
      width="100%"
      height="100%"
      // width="350"
      // height="370"
      frameBorder="0"
      // scrolling="no"
      scrolling="yes"
    />
  </div>
);

export default CovidTracker;
