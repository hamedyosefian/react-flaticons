import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const BusinessTime = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M17 10c-3.859 0-7 3.14-7 7s3.141 7 7 7 7-3.14 7-7-3.141-7-7-7Zm0 12c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5Zm1.707-4.707a.999.999 0 1 1-1.414 1.414l-1-1A1 1 0 0 1 16 17v-2a1 1 0 1 1 2 0v1.586l.707.707ZM9 22H5c-1.654 0-3-1.346-3-3v-5h6a1 1 0 1 0 0-2H2V9c0-1.654 1.346-3 3-3h14c1.654 0 3 1.346 3 3a1 1 0 1 0 2 0c0-2.757-2.243-5-5-5h-1.101A5.01 5.01 0 0 0 13 0h-2a5.009 5.009 0 0 0-4.899 4H5C2.243 4 0 6.243 0 9v10c0 2.757 2.243 5 5 5h4a1 1 0 1 0 0-2Zm2-20h2c1.304 0 2.415.836 2.828 2H8.172A3.004 3.004 0 0 1 11 2Z" />
  </svg>
));

BusinessTime.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BusinessTime.displayName = 'BusinessTime';

export default BusinessTime;
