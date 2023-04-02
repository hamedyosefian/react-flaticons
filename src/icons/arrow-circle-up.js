import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ArrowCircleUp = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M12 24A12 12 0 1 0 0 12a12.013 12.013 0 0 0 12 12Zm0-22A10 10 0 1 1 2 12 10.011 10.011 0 0 1 12 2Zm-5.707 8.879a1 1 0 0 0 1.414 0L11 7.587 11.007 18a1 1 0 0 0 2 0L13 7.586l3.293 3.293a1 1 0 1 0 1.438-1.389l-.024-.025-3.585-3.586a3 3 0 0 0-4.243 0L6.293 9.465a1 1 0 0 0 0 1.414Z" />
  </svg>
));

ArrowCircleUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowCircleUp.displayName = 'ArrowCircleUp';

export default ArrowCircleUp;