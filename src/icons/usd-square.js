import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const UsdSquare = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M19 0H5C2.243 0 0 2.243 0 5v14c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5V5c0-2.757-2.243-5-5-5Zm3 19c0 1.654-1.346 3-3 3H5c-1.654 0-3-1.346-3-3V5c0-1.654 1.346-3 3-3h14c1.654 0 3 1.346 3 3v14Zm-6-5c0 1.654-1.346 3-3 3v1a1 1 0 1 1-2 0v-1h-.268a3.01 3.01 0 0 1-2.598-1.499 1 1 0 1 1 1.73-1.002c.179.31.511.501.867.501h2.268a1 1 0 0 0 1-1 .768.768 0 0 0-.644-.76l-3.041-.507A2.761 2.761 0 0 1 7.999 10c0-1.654 1.346-3 3-3V6a1 1 0 1 1 2 0v1h.268c1.067 0 2.063.575 2.598 1.5a1 1 0 1 1-1.73 1.001 1.004 1.004 0 0 0-.867-.5H11c-.552 0-1 .449-1 1 0 .378.271.698.644.76l3.041.507A2.761 2.761 0 0 1 16 14.001Z" />
  </svg>
));

UsdSquare.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UsdSquare.displayName = 'UsdSquare';

export default UsdSquare;
