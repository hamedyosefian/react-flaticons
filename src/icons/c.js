import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const C = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M13 24h-1C6.486 24 2 19.514 2 14v-4C2 4.486 6.486 0 12 0h1a9.949 9.949 0 0 1 8.96 5.554 1 1 0 0 1-1.791.891A7.959 7.959 0 0 0 13 2h-1c-4.411 0-8 3.589-8 8v4c0 4.411 3.589 8 8 8h1c3.006 0 5.73-1.66 7.111-4.333a1 1 0 1 1 1.778.918A9.972 9.972 0 0 1 13 24Z" />
  </svg>
));

C.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

C.displayName = 'C';

export default C;
