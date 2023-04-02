import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const F = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M21 0H7C4.243 0 2 2.243 2 5v18c.006 1.308 1.994 1.307 2 0V13h13c1.308-.006 1.307-1.994 0-2H4V5c0-1.654 1.346-3 3-3h14c1.308-.006 1.307-1.994 0-2Z" />
  </svg>
));

F.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

F.displayName = 'F';

export default F;
