import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const LaughBeam = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M7 11a1 1 0 0 1-2 0c0-1.892 1.232-4 3-4s3 2.108 3 4a1 1 0 0 1-2 0c0-1.054-.679-2-1-2s-1 .946-1 2Zm9-4c-1.768 0-3 2.108-3 4a1 1 0 0 0 2 0c0-1.054.679-2 1-2s1 .946 1 2a1 1 0 0 0 2 0c0-1.892-1.232-4-3-4Zm-.01 7H8.009a.994.994 0 0 0-.955 1.3 5.178 5.178 0 0 0 9.9-.007A.994.994 0 0 0 15.99 14ZM24 12a12.013 12.013 0 0 1-12 12C-3.9 23.4-3.893.6 12 0a12.013 12.013 0 0 1 12 12Zm-2 0A10.011 10.011 0 0 0 12 2c-13.248.5-13.245 19.5 0 20a10.011 10.011 0 0 0 10-10Z" />
  </svg>
));

LaughBeam.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

LaughBeam.displayName = 'LaughBeam';

export default LaughBeam;
