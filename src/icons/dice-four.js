import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const DiceFour = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M19 24H5a5.006 5.006 0 0 1-5-5V5a5.006 5.006 0 0 1 5-5h14a5.006 5.006 0 0 1 5 5v14a5.006 5.006 0 0 1-5 5ZM5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3Zm1 5a1 1 0 1 0 1-1 1 1 0 0 0-1 1Zm10 0a1 1 0 1 0 1-1 1 1 0 0 0-1 1ZM6 17a1 1 0 1 0 1-1 1 1 0 0 0-1 1Zm10 0a1 1 0 1 0 1-1 1 1 0 0 0-1 1Z" />
  </svg>
));

DiceFour.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

DiceFour.displayName = 'DiceFour';

export default DiceFour;
