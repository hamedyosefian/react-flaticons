import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const U = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M12 24C6.486 24 2 19.514 2 14V1C2.006-.308 3.995-.307 4 1v13c.377 10.591 15.627 10.583 16 0V1c.006-1.308 1.995-1.307 2 0v13c0 5.514-4.486 10-10 10Z" />
  </svg>
));

U.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

U.displayName = 'U';

export default U;
