import React from 'react';
import { motion, useAnimation } from 'framer-motion';
// import { Frame } from 'framer';
// import ReactFreezeframe from 'react-freezeframe';
// {/* <ReactFreezeframe
//        options={{
//          trigger: 'hover',
//        }}
//        src={batiganSrc}
//        alt={batiganAlt}
//      /> */}

import Icon from 'src/components/global/Icon';

import styles from './Batigan.module.scss';

// https://www.benmarshall.me/how-to-pause-a-gif/
const Batigan = () => {
  const flyoverTextSrc = 'images/flyover-indies-logo-text.svg';
  const flyoverTextAlt = 'Flyover Indies logo';

  const batiganSpriteSrc = 'images/flitz-batigan-sprite.png';
  const batiganAlt = 'Flitz Batigan the Flyover Indies mascot';

  const batInitial = {
    display: 'none',
    rotateX: 0,
    rotateY: 0,
    transformPerspective: '10em',
  };
  const textInitial = {
    rotateX: 0,
    rotateY: 0,
    transformPerspective: '10em',
  };

  const textAnimation = useAnimation();
  const batAnimation = useAnimation();

  async function sequence() {
    const spinTime = styles.var_animationDelay * 2;
    const batTime = styles.var_animationDuration;

    // spin text out
    await textAnimation.start({
      rotateX: [0, -90],
      rotateY: [0, 15],
      opacity: [1, 0],
      transition: {
        duration: spinTime,
        ease: 'anticipate',
        opacity: {
          ease: 'circIn',
          duration: spinTime,
        },
      },
      transitionEnd: { display: 'none' },
    });

    // spin bat in
    await batAnimation.start({
      display: 'block',
      rotateX: [90, 0],
      rotateY: [-15, 0],
      opacity: [0, 1],
      transition: {
        duration: spinTime,
        ease: 'anticipate',
        opacity: {
          ease: 'circOut',
          duration: spinTime,
        },
      },
    });

    // play sprite animation, then spin bat out
    await batAnimation.start({
      rotateX: [0, -90],
      rotateY: [0, 15],
      opacity: [1, 0],
      transition: {
        delay: batTime,
        duration: spinTime,
        ease: 'anticipate',
        opacity: {
          ease: 'circIn',
          delay: batTime,
          duration: spinTime,
        },
      },
      transitionEnd: {
        display: 'none',
      },
    });

    // spin text in
    await textAnimation.start({
      display: 'block',
      rotateX: [90, 0],
      rotateY: [-15, 0],
      opacity: [0, 1],
      transition: {
        duration: spinTime,
        ease: 'anticipate',
        opacity: {
          ease: 'circOut',
          duration: spinTime,
        },
      },
    });
  }

  return (
    <div className={styles.batigan}>
      <motion.div
        onTap={sequence}
        animate={textAnimation}
        initial={textInitial}
        className={styles.batigan__logo}
      >
        <Icon src={flyoverTextSrc} alt={flyoverTextAlt} />
      </motion.div>

      <motion.div
        onTap={sequence}
        animate={batAnimation}
        initial={batInitial}
        className={styles.batigan__gif}
      >
        <img
          className={styles.batigan__sprite}
          src={batiganSpriteSrc}
          alt={batiganAlt}
        />
      </motion.div>
    </div>
  );
};

export default Batigan;
