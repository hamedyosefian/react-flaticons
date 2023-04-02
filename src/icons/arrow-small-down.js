import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ArrowSmallDown = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M17.71 12.71a1 1 0 0 0-1.42 0L13 16V6a1 1 0 0 0-2 0v10l-3.29-3.29a1 1 0 0 0-1.42 0 1 1 0 0 0 0 1.41l4.3 4.29A2 2 0 0 0 12 19a2 2 0 0 0 1.4-.59l4.3-4.29a1 1 0 0 0 .01-1.41Z" />
  </svg>
));

ArrowSmallDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowSmallDown.displayName = 'ArrowSmallDown';

export default ArrowSmallDown;
