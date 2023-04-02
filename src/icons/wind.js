import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Wind = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M0 12a1 1 0 0 1 1-1h6a1 1 0 0 1 0 2H1a1 1 0 0 1-1-1Zm20.886-.893A4.99 4.99 0 1 0 12 8a1 1 0 0 0 2 0 3 3 0 1 1 3 3h-6a1 1 0 0 0 0 2h9a2 2 0 0 1 2 2c-.009 2.337-3.281 2.648-4.057.667a1 1 0 0 0-1.886.666C17.615 20.415 23.952 19.579 24 15a4 4 0 0 0-3.114-3.893ZM11 16H1a1 1 0 0 0 0 2h10a2 2 0 0 1 2 2c-.009 2.337-3.281 2.648-4.057.667a1 1 0 1 0-1.886.666C8.615 25.415 14.952 24.579 15 20a4 4 0 0 0-4-4ZM1 8h6a4 4 0 0 0 4-4c-.048-4.581-6.387-5.414-7.943-1.333a1 1 0 0 0 1.886.666C5.72 1.351 8.991 1.663 9 4a2 2 0 0 1-2 2H1a1 1 0 0 0 0 2Z" />
  </svg>
));

Wind.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Wind.displayName = 'Wind';

export default Wind;
