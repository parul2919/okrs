// @flow
// eslint-disable-next-line no-unused-vars
type dimension = {
    [key: string]: number | Object,
  };
  
  // Component dimension
  const dimensionConst = {
    MIN_WIDTH_MOBILE: 360,
    MIN_WIDTH_TABLET: 768,
    MIN_WIDTH_DESKTOP: 960,
    MIN_WIDTH_MID_DESKTOP: 1200,
  };
  
  const mediaQuery = {
    large: `(min-width:${dimensionConst.MIN_WIDTH_MID_DESKTOP}px)`,
    desktop: `(min-width: ${dimensionConst.MIN_WIDTH_DESKTOP}px)`,
    tablet: `(min-width: ${dimensionConst.MIN_WIDTH_TABLET}px)`,
    small: `(min-width: ${dimensionConst.MIN_WIDTH_MOBILE}px)`,
  };
  
  export default { dimensionConst, mediaQuery };
  