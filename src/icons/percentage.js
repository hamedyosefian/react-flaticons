import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Percentage = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M1 24a.999.999 0 0 1-.707-1.707l22-22a.999.999 0 1 1 1.414 1.414l-22 22A.997.997 0 0 1 1 24ZM9 5c0-2.206-1.794-4-4-4S1 2.794 1 5s1.794 4 4 4 4-1.794 4-4ZM7 5c0 1.103-.897 2-2 2s-2-.897-2-2 .897-2 2-2 2 .897 2 2Zm16 14c0-2.206-1.794-4-4-4s-4 1.794-4 4 1.794 4 4 4 4-1.794 4-4Zm-2 0c0 1.103-.897 2-2 2s-2-.897-2-2 .897-2 2-2 2 .897 2 2Z" />
  </svg>
));

Percentage.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Percentage.displayName = 'Percentage';

export default Percentage;
