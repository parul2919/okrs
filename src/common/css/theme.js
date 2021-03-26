import colors from './colors';
import fonts from './fonts';
import dimension from './dimensions';

const theme = {

  // app colors
  colorWhite: colors.WHITE,
  colorLightGrey: colors.LIGHTGREY,
  colorGrey: colors.GREY,
  colorBlack: colors.BLACK,
  colorMidnightBlack: colors.MIDNIGHT_BLACK,
  colorRed:colors.ERROR_RED,
  colorOpaque:colors.OPAQUE,
  colorYellow:colors.YOLLOW,
  colorOffwhite:colors.OFFWHITE,
  
  // app fonts
  fallbackFont: fonts.FALLBACK_FONT,

  // app font variable
  fontXS: fonts.FONT_XS,
  fontS: fonts.FONT_S,
  fontL: fonts.FONT_L,
  fontXVI: fonts.FONT_XVI,
  fontXL: fonts.FONT_XL,
  fontXXL: fonts.FONT_XXL,
  fontXXII: fonts.FONT_XXII,
  
  // app font weight variable
  letterSpacing: fonts.LETTER_SPACING,
  fontNormal: fonts.FONT_NORMAL,
  fontWt400: fonts.FONT_BOOK,
  fontWt300: fonts.FONT_300,
  fontWt500: fonts.FONT_MEDIUM,
  fontWt700: fonts.FONT_SEMI_BOLD,
  fontWt900: fonts.FONT_BOLD,
  
  // app line height variable
  lineHeightBase: fonts.BASE_LINE_HEIGHT,
  lineHeightBase_XS: fonts.LINE_HEIGHT_FONT_XS,
  lineHeightFont_S: fonts.LINE_HEIGHT_FONT_S,
  lineHeightBase_XVI: fonts.LINE_HEIGHT_FONT_XVI,
  lineHeightFont_XXI: fonts.LINE_HEIGHT_FONT_XXI,
  
  // app media query
  largeMediaQuery: dimension.mediaQuery.large,
  desktopMediaQuery: dimension.mediaQuery.desktop,
  tabletMediaQuery: dimension.mediaQuery.tablet,
  smallMediaQuery: dimension.mediaQuery.small,

  // theme border radius

  borderRadius: '5px',
};

const themes = { dimension, ...theme };
export default themes;
