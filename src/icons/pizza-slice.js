import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const PizzaSlice = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M23.2.8a2.716 2.716 0 0 0-2.9-.624L3.155 6.929a4.976 4.976 0 0 0-3 5.824 15.855 15.855 0 0 0 11.094 11.1 4.983 4.983 0 0 0 5.825-3.009l6.758-17.172A2.71 2.71 0 0 0 23.2.8ZM11.746 21.911a13.8 13.8 0 0 1-9.656-9.657 2.949 2.949 0 0 1 1.265-3.18 11.987 11.987 0 0 0 11.569 11.572 2.947 2.947 0 0 1-3.178 1.265Zm4.027-3.227c-6.191-.1-10.355-4.265-10.456-10.457l15.693-6.18a.717.717 0 0 1 .771.17.7.7 0 0 1 .181.747L21.3 4.645c-5.758-1.98-8.942 6.209-3.413 8.668Zm2.847-7.232a2.654 2.654 0 0 1 1.943-4.935Z" />
    <path d="M11 9a2 2 0 0 0 0 4 2 2 0 0 0 0-4Z" />
  </svg>
));

PizzaSlice.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PizzaSlice.displayName = 'PizzaSlice';

export default PizzaSlice;