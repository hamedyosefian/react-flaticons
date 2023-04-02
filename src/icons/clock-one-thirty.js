import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ClockOneThirty = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12Zm0-22C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2Zm1 16v-5.732l1.866-3.232a1 1 0 0 0-1.732-1l-2 3.464A1.007 1.007 0 0 0 11 12v6a1 1 0 1 0 2 0Z" />
  </svg>
));

ClockOneThirty.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ClockOneThirty.displayName = 'ClockOneThirty';

export default ClockOneThirty;