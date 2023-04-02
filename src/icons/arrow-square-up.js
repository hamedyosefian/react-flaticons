import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ArrowSquareUp = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M5 24h14a5.006 5.006 0 0 0 5-5V5a5.006 5.006 0 0 0-5-5H5a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5ZM2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Zm4.293 5.879a1 1 0 0 0 1.414 0L11 7.587 11.007 18a1 1 0 0 0 2 0L13 7.586l3.293 3.293a1 1 0 1 0 1.438-1.389l-.024-.025-3.585-3.586a3 3 0 0 0-4.243 0L6.293 9.465a1 1 0 0 0 0 1.414Z" />
  </svg>
));

ArrowSquareUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowSquareUp.displayName = 'ArrowSquareUp';

export default ArrowSquareUp;
