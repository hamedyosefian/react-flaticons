import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const TimeOclock = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0zm0 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1-10 10zm2-10a2 2 0 1 1-3-1.723V7a1 1 0 0 1 2 0v3.277A1.994 1.994 0 0 1 14 12z" />
  </svg>
));

TimeOclock.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TimeOclock.displayName = 'TimeOclock';

export default TimeOclock;
