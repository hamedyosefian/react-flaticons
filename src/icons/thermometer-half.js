import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ThermometerHalf = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M13 14.184V8a1 1 0 0 0-2 0v6.184a2.994 2.994 0 1 0 2 0Zm4-2.073V5c-.211-6.609-9.791-6.6-10 0v7.111a7 7 0 1 0 10 0ZM12 22a5.018 5.018 0 0 1-3.332-8.719A1 1 0 0 0 9 12.537V5a3 3 0 0 1 6 0v7.537a1 1 0 0 0 .332.744A5.018 5.018 0 0 1 12 22Z" />
    </svg>
  );
});

ThermometerHalf.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ThermometerHalf.displayName = 'ThermometerHalf';

export default ThermometerHalf;
