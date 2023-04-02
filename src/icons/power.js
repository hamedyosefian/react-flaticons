import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Power = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M15 3.849a1.02 1.02 0 0 0 .629.926A9 9 0 0 1 21 13.292 9 9 0 0 1 3 13a9 9 0 0 1 5.371-8.224A1.023 1.023 0 0 0 9 3.848a1 1 0 0 0-1.374-.929 11 11 0 1 0 8.751 0 1 1 0 0 0-1.377.93Z" />
    <rect width="2" height="8" x="11" rx="1" />
  </svg>
));

Power.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Power.displayName = 'Power';

export default Power;