import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const BowlingBall = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0Zm0 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1-10 10Zm-1-12a1 1 0 1 1-1-1 1 1 0 0 1 1 1Zm-4 0a1 1 0 1 1-1-1 1 1 0 0 1 1 1Zm2-3a1 1 0 1 1-1-1 1 1 0 0 1 1 1Z" />
  </svg>
));

BowlingBall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BowlingBall.displayName = 'BowlingBall';

export default BowlingBall;
