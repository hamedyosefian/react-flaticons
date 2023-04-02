import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Check = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M22.319 4.431 8.5 18.249a1 1 0 0 1-1.417 0L1.739 12.9a1 1 0 0 0-1.417 0 1 1 0 0 0 0 1.417l5.346 5.345a3.008 3.008 0 0 0 4.25 0L23.736 5.847a1 1 0 0 0 0-1.416 1 1 0 0 0-1.417 0Z" />
  </svg>
));

Check.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Check.displayName = 'Check';

export default Check;