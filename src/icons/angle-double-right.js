import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const AngleDoubleRight = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M11.83 24a1 1 0 0 1-.71-.29 1 1 0 0 1 0-1.42l8.17-8.17a3 3 0 0 0 0-4.24l-8.17-8.17A1 1 0 1 1 12.54.29l8.17 8.17a5 5 0 0 1 0 7.08l-8.17 8.17a1 1 0 0 1-.71.29Z" />
    <path d="M1.83 24a1 1 0 0 1-.71-.29 1 1 0 0 1 0-1.42l9.59-9.58a1 1 0 0 0 0-1.42L1.12 1.71A1 1 0 0 1 2.54.29l9.58 9.59a3 3 0 0 1 0 4.24l-9.58 9.59a1 1 0 0 1-.71.29Z" />
  </svg>
));

AngleDoubleRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

AngleDoubleRight.displayName = 'AngleDoubleRight';

export default AngleDoubleRight;
