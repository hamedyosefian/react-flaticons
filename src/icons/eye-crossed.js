import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const EyeCrossed = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M23.271 9.419A15.866 15.866 0 0 0 19.9 5.51l2.8-2.8a1 1 0 0 0-1.414-1.414l-3.045 3.049A12.054 12.054 0 0 0 12 2.655c-6.191 0-9.719 4.238-11.271 6.764a4.908 4.908 0 0 0 0 5.162A15.866 15.866 0 0 0 4.1 18.49l-2.8 2.8a1 1 0 1 0 1.414 1.414l3.052-3.052A12.054 12.054 0 0 0 12 21.345c6.191 0 9.719-4.238 11.271-6.764a4.908 4.908 0 0 0 0-5.162ZM2.433 13.534a2.918 2.918 0 0 1 0-3.068C3.767 8.3 6.782 4.655 12 4.655a10.1 10.1 0 0 1 4.766 1.165l-2.013 2.013a4.992 4.992 0 0 0-6.92 6.92l-2.31 2.31a13.723 13.723 0 0 1-3.09-3.529ZM15 12a3 3 0 0 1-3 3 2.951 2.951 0 0 1-1.285-.3l3.985-3.985A2.951 2.951 0 0 1 15 12Zm-6 0a3 3 0 0 1 3-3 2.951 2.951 0 0 1 1.285.3L9.3 13.285A2.951 2.951 0 0 1 9 12Zm12.567 1.534C20.233 15.7 17.218 19.345 12 19.345a10.1 10.1 0 0 1-4.766-1.165l2.013-2.013a4.992 4.992 0 0 0 6.92-6.92l2.31-2.31a13.723 13.723 0 0 1 3.09 3.529 2.918 2.918 0 0 1 0 3.068Z" />
  </svg>
));

EyeCrossed.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

EyeCrossed.displayName = 'EyeCrossed';

export default EyeCrossed;
