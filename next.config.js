// for transpiling all ESM @fullcalendar/* packages
// also, for piping fullcalendar thru babel (to learn why, see babel.config.js)
const withTM = require('next-transpile-modules')([
  '@fullcalendar/common',
  '@fullcalendar/google-calendar',
  '@fullcalendar/interaction',
  '@fullcalendar/list',
  '@fullcalendar/react',
]);

module.exports = {
  ...withTM(),
};
