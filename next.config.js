// for transpiling all ESM @fullcalendar/* packages
// also, for piping fullcalendar thru babel (to learn why, see babel.config.js)
// declare withTM as your last plugin (the "most nested" one)
const withTM = require('next-transpile-modules')([
  '@fullcalendar/common',
  '@fullcalendar/google-calendar',
  '@fullcalendar/interaction',
  '@fullcalendar/list',
  '@fullcalendar/react',
]);

module.exports = {
  ...withTM(),
  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    // -- don't care, we're running our own config
    ignoreDuringBuilds: true,
  },
};
