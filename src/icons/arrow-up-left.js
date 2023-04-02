import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ArrowUpLeft = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M23.707 22.293 3.482 2.068A2.01 2.01 0 0 1 4 2h9a1 1 0 0 0 0-2H4C1.794 0 0 1.794 0 4v9a1 1 0 0 0 2 0V4c0-.179.024-.352.068-.518l20.225 20.225a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414Z" />
  </svg>
));

ArrowUpLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowUpLeft.displayName = 'ArrowUpLeft';

export default ArrowUpLeft;
