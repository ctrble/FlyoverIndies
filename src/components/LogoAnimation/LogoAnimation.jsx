import React from 'react';
import { motion, useAnimation } from 'framer-motion';

import Icon from 'src/components/global/Icon';

import styles from './LogoAnimation.module.scss';

const LogoAnimation = () => {
  const flyoverTextSrc = 'images/flyover-indies-logo-text.svg';
  const flyoverTextAlt = 'Flyover Indies logo';

  const batiganSpriteSrc = 'images/flitz-batigan-sprite.png';
  const batiganAlt = 'Flitz Batigan, Flyover Indies mascot';

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

  const spinTime = styles.var_animationDelay * 2;
  const batTime = styles.var_animationDuration;

  const textVariants = {
    hover: {
      y: -5,
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: 'reverse',
      },
    },
    spinOut: {
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
    },
    spinIn: {
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
    },
  };

  const batVariants = {
    spinIn: {
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
    },
    spinOut: {
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
    },
  };

  async function textToBatSpin() {
    await textAnimation.start(textVariants.spinOut);
    await batAnimation.start(batVariants.spinIn);
    await batAnimation.start(batVariants.spinOut);
    await textAnimation.start(textVariants.spinIn);
  }

  return (
    <div className={styles.logo}>
      <motion.div
        whileHover={textVariants.hover}
        onTap={textToBatSpin}
        animate={textAnimation}
        initial={textInitial}
        variants={textVariants}
        className={styles.logo__text}
      >
        <Icon
          className={styles.logo__svg}
          src={flyoverTextSrc}
          alt={flyoverTextAlt}
        />
      </motion.div>

      <motion.div
        onTap={textToBatSpin}
        animate={batAnimation}
        initial={batInitial}
        className={styles.logo__batigan}
      >
        <img
          className={styles.logo__sprite}
          src={batiganSpriteSrc}
          alt={batiganAlt}
        />
      </motion.div>
    </div>
  );
};

export default LogoAnimation;
