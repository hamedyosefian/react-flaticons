import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Screen = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M19 3H5a5.006 5.006 0 0 0-5 5v6a5.006 5.006 0 0 0 5 5h6v1H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2h-3v-1h6a5.006 5.006 0 0 0 5-5V8a5.006 5.006 0 0 0-5-5Zm3 11a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3Z" />
  </svg>
));

Screen.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Screen.displayName = 'Screen';

export default Screen;
