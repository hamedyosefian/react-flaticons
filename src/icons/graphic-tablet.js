import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const GraphicTablet = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M19 4H7a5.006 5.006 0 0 0-5 5v2H1a1 1 0 0 0 0 2h1v2a5.006 5.006 0 0 0 5 5h12a5.006 5.006 0 0 0 5-5V9a5.006 5.006 0 0 0-5-5ZM4 15v-2a1 1 0 0 0 0-2V9a3 3 0 0 1 3-3v12a3 3 0 0 1-3-3Zm18 0a3 3 0 0 1-3 3H9V6h10a3 3 0 0 1 3 3Z" />
  </svg>
));

GraphicTablet.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

GraphicTablet.displayName = 'GraphicTablet';

export default GraphicTablet;
