import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Glasses = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M20 0a4 4 0 0 0-4 4 1 1 0 0 0 2 0 2 2 0 0 1 4 0v11.026A4.948 4.948 0 0 0 19 14a5 5 0 0 0-4.145 2.207 3.98 3.98 0 0 0-5.71 0A5 5 0 0 0 5 14a4.948 4.948 0 0 0-3 1.026V4a2 2 0 0 1 4 0 1 1 0 0 0 2 0 4 4 0 0 0-8 0v15a5 5 0 0 0 10 0 2 2 0 0 1 4 0 5 5 0 0 0 10 0V4a4 4 0 0 0-4-4zM5 22a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm14 0a3 3 0 1 1 3-3 3 3 0 0 1-3 3z" />
  </svg>
));

Glasses.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Glasses.displayName = 'Glasses';

export default Glasses;
