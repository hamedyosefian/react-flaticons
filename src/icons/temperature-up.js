import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const TemperatureUp = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M7 24c-6.079.117-9.334-7.638-5-11.89V5c.211-6.609 9.791-6.6 10 0v7.11c4.335 4.253 1.077 12.007-5 11.89ZM7 2a3 3 0 0 0-3 3v7.537a1 1 0 0 1-.332.744A5.018 5.018 0 0 0 7 22a5.018 5.018 0 0 0 3.332-8.719 1 1 0 0 1-.332-.744V5a3 3 0 0 0-3-3Zm0 18a3.007 3.007 0 0 1-1-5.829V4.89a1 1 0 0 1 2 0v9.281A3.007 3.007 0 0 1 7 20Zm0-4a1 1 0 0 0 0 2 1 1 0 0 0 0-2ZM22.7 3.293l-3-3a1 1 0 0 0-1.414 0l-3 3A1 1 0 0 0 16.7 4.708L18 3.415V11a1 1 0 0 0 2 0V3.415l1.3 1.293a1 1 0 0 0 1.41-1.415h-.005Z" />
    </svg>
  );
});

TemperatureUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TemperatureUp.displayName = 'TemperatureUp';

export default TemperatureUp;
