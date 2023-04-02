import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const AngleSmallRight = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="m15.4 9.88-4.59-4.59a1 1 0 0 0-1.41 0 1 1 0 0 0 0 1.42l4.6 4.58a1 1 0 0 1 0 1.42l-4.6 4.58a1 1 0 0 0 1.41 1.42l4.59-4.59a3 3 0 0 0 0-4.24Z" />
  </svg>
));

AngleSmallRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

AngleSmallRight.displayName = 'AngleSmallRight';

export default AngleSmallRight;
