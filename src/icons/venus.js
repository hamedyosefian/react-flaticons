import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Venus = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M20 8a8 8 0 1 0-9 7.931V19H9a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2h-2v-3.069A8.008 8.008 0 0 0 20 8ZM6 8a6 6 0 1 1 6 6 6.006 6.006 0 0 1-6-6Z" />
  </svg>
));

Venus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Venus.displayName = 'Venus';

export default Venus;
