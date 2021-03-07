/* eslint-disable */
// eslint does not like this package one bit
import Typography from 'typography';
import lincolnTheme from 'typography-theme-lincoln';

lincolnTheme.googleFonts = [
  {
    name: 'Varela Round',
    styles: ['400', '700'],
  },
  {
    name: 'Roboto Mono',
    styles: ['400', '700'],
  },
];
lincolnTheme.bodyFontFamily = ['Roboto Mono', 'sans-serif'];

const typographyTheme = new Typography(lincolnTheme);

export default typographyTheme;
