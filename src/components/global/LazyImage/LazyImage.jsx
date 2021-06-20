import React from 'react';
import PropTypes from 'prop-types';
// import Image from 'next/image';

// import TestImage from 'public/images/keeb.jpg';

// import Button from '../../SocialLinks';
// import * as siteImages from 'public/images';

// import LazyLoad from 'react-lazyload';
// import { LazyLoadImage } from 'react-lazy-load-image-component';

// import 'react-lazy-load-image-component/src/effects/blur.css';

// import styles from './Image.module.scss';

// function importAll(r) {
//   return r.keys().map(r);
// }

// const images = importAll(
//   require.context('public/images', false, /\.(png|jpe?g|svg)$/)
// );

const LazyImage = ({ src, alt }) => {
  console.log(src);

  // if (src === '')

  // const graphImage = require(`public${src}`);
  // console.log(graphImage);

  // console.log(images);
  // const loadImage = async () => {
  //   // const { default: AmuAds } = await import(
  //   // const tempImage = await import(/* webpackMode: "lazy" */ `public${src}`);
  //   const {default: } = await import(/* webpackMode: "lazy" */ `public${src}`);
  //   return tempImage;

  //   // import(`./locale/${language}.json`).then((module) => {
  //   //   // do something with the translations
  //   // });
  // };
  // console.log(loadImage);
  // const tempImage = require(`public${src}`);
  // console.log(tempImage);

  return (
    // <Image src={src} alt={alt} layout="fill" />
    // <Image src={loadImage()} alt={alt} />
    // <Image src={images.src} alt={alt} />
    // <Image src={TestImage} alt={alt} />
    // <Image src={src} alt={alt} width={500} height={500} />
    // <LazyLoadImage src={src} alt={alt} effect="opacity" />
    // <LazyLoad height="100%" className={styles.revealer} once>
    <img src={src} alt={alt} />
    // </LazyLoad>
  );
};

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default LazyImage;
