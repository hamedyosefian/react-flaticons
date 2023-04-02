import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const At = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M12 0A12.013 12.013 0 0 0 0 12c-.126 9.573 11.159 15.429 18.9 9.817a1 1 0 1 0-1.152-1.634C11.3 24.856 1.9 19.978 2 12c.549-13.266 19.453-13.263 20 0v2a2 2 0 0 1-4 0v-2c-.252-7.929-11.749-7.928-12 0a6.017 6.017 0 0 0 10.52 3.933A4 4 0 0 0 24 14v-2A12.013 12.013 0 0 0 12 0Zm0 16a4 4 0 0 1 0-8 4 4 0 0 1 0 8Z" />
  </svg>
));

At.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

At.displayName = 'At';

export default At;
