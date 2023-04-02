import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CaretSquareLeft = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M0 12a12 12 0 1 1 12 12A12.013 12.013 0 0 1 0 12Zm22 0a10 10 0 1 0-10 10 10.011 10.011 0 0 0 10-10Zm-9.6-5.731-5.15 5.087a.9.9 0 0 0 0 1.288l5.15 5.087a.924.924 0 0 0 1.575-.644V6.913a.924.924 0 0 0-1.575-.644Z" />
  </svg>
));

CaretSquareLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CaretSquareLeft.displayName = 'CaretSquareLeft';

export default CaretSquareLeft;
