import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Upload = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M11.007 2.578 11 18.016a1 1 0 0 0 1 1 1 1 0 0 0 1-1l.007-15.421 2.912 2.913a1 1 0 0 0 1.414 0 1 1 0 0 0 0-1.414L14.122.879a3 3 0 0 0-4.244 0L6.667 4.091a1 1 0 0 0 0 1.414 1 1 0 0 0 1.414 0Z" />
    <path d="M22 17v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-4a1 1 0 0 0-1-1 1 1 0 0 0-1 1v4a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3v-4a1 1 0 0 0-1-1 1 1 0 0 0-1 1Z" />
  </svg>
));

Upload.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Upload.displayName = 'Upload';

export default Upload;