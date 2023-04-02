import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Y = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M21.633.226a1 1 0 0 0-1.407.142L12 10.421 3.774.367a1 1 0 0 0-1.549 1.265L11 12.357V23c.005 1.308 1.995 1.307 2 0V12.357l8.774-10.724a1 1 0 0 0-.142-1.407Z" />
  </svg>
));

Y.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Y.displayName = 'Y';

export default Y;
