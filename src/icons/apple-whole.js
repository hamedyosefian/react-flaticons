import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const AppleWhole = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M17.246 6.193a6.744 6.744 0 0 0 1.737-3.94A2 2 0 0 0 16.749.016 6.318 6.318 0 0 0 12.133 2.6 8.162 8.162 0 0 0 10.711.271a1 1 0 0 0-1.428 1.4A7.583 7.583 0 0 1 10.942 6H8.5A8.771 8.771 0 0 0 0 15c-.161 5.6 5.644 10.773 10.75 8.385a2.4 2.4 0 0 1 2.605.019A4.444 4.444 0 0 0 15.5 24c10.264-.284 11.566-15.418 1.746-17.807Zm-3.023-3.025A4.783 4.783 0 0 1 17 2a4.8 4.8 0 0 1-1.167 2.772 4.793 4.793 0 0 1-2.778 1.168 4.785 4.785 0 0 1 1.168-2.772ZM15.5 22a2.542 2.542 0 0 1-1.244-.381A4.62 4.62 0 0 0 12 21a4.527 4.527 0 0 0-2.137.593C6.005 23.261 1.9 19.141 2 15a6.772 6.772 0 0 1 6.5-7h7c8.6.321 8.6 13.682 0 14Z" />
  </svg>
));

AppleWhole.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

AppleWhole.displayName = 'AppleWhole';

export default AppleWhole;
