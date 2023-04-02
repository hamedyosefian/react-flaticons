import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ArrowCircleRight = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M0 12A12 12 0 1 0 12 0 12.013 12.013 0 0 0 0 12Zm22 0A10 10 0 1 1 12 2a10.011 10.011 0 0 1 10 10Zm-8.879-5.707a1 1 0 0 0 0 1.414L16.413 11 6 11.007a1 1 0 1 0 0 2L16.414 13l-3.293 3.293a1 1 0 1 0 1.389 1.438l.025-.024 3.586-3.585a3 3 0 0 0 0-4.243l-3.586-3.586a1 1 0 0 0-1.414 0Z" />
  </svg>
));

ArrowCircleRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowCircleRight.displayName = 'ArrowCircleRight';

export default ArrowCircleRight;
