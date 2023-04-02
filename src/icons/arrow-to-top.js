import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ArrowToTop = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M6 2.031h4.517a2.492 2.492 0 0 0-.285.232l-4.95 4.95A1 1 0 0 0 6.7 8.627l4.3-4.3V23a1 1 0 0 0 2 0V4.324l4.3 4.3a1 1 0 0 0 1.414-1.414l-4.95-4.95a2.492 2.492 0 0 0-.285-.232H18a1 1 0 0 0 0-2H6a1 1 0 0 0 0 2Z" />
  </svg>
));

ArrowToTop.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowToTop.displayName = 'ArrowToTop';

export default ArrowToTop;
