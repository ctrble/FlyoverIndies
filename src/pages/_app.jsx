import React from 'react';

import '../scss/global.scss';

/* eslint-disable react/prop-types, react/jsx-props-no-spreading */
function FlyoverIndies({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
/* eslint-enable react/prop-types, react/jsx-props-no-spreading */

export default FlyoverIndies;
