import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ArrowSquareRight = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M0 5v14a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V5a5.006 5.006 0 0 0-5-5H5a5.006 5.006 0 0 0-5 5Zm19-3a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3Zm-5.879 4.293a1 1 0 0 0 0 1.414L16.413 11 6 11.007a1 1 0 1 0 0 2L16.414 13l-3.293 3.293a1 1 0 1 0 1.389 1.438l.025-.024 3.586-3.585a3 3 0 0 0 0-4.243l-3.586-3.586a1 1 0 0 0-1.414 0Z" />
  </svg>
));

ArrowSquareRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowSquareRight.displayName = 'ArrowSquareRight';

export default ArrowSquareRight;