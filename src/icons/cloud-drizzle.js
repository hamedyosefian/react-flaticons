import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CloudDrizzle = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M18 24a1 1 0 0 1-1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1-1 1Zm-6 0a1 1 0 0 1-1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1-1 1Zm-6 0a1 1 0 0 1-1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1-1 1Zm-1-4.027a1.032 1.032 0 0 1-.111-.006A5.526 5.526 0 0 1 1.8 10.43a1 1 0 0 0 .345-.9 8.147 8.147 0 0 1-.033-2.889A7.946 7.946 0 0 1 8.5.137a8.06 8.06 0 0 1 8.735 4.44 1.036 1.036 0 0 0 .742.569A7.5 7.5 0 0 1 19.4 19.39a1 1 0 0 1-.792-1.837 5.5 5.5 0 0 0-1.025-10.447 3.011 3.011 0 0 1-2.158-1.672A6 6 0 0 0 4.086 6.967a6.142 6.142 0 0 0 .024 2.181 3.005 3.005 0 0 1-.964 2.762 3.522 3.522 0 0 0 1.964 6.069A1 1 0 0 1 5 19.973ZM15 18a1 1 0 0 1-1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1-1 1Zm-6 0a1 1 0 0 1-1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1-1 1Z" />
  </svg>
));

CloudDrizzle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CloudDrizzle.displayName = 'CloudDrizzle';

export default CloudDrizzle;
