import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const FilterSlash = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="m23.707 22.293-7.414-7.414 4.345-4.478a4.928 4.928 0 0 0 1.4-3.451 4.957 4.957 0 0 0-4.951-4.951H6.951c-.973 0-1.909.297-2.712.825L1.707.293A.999.999 0 1 0 .293 1.707l22 22a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414ZM6.951 4h10.137a2.955 2.955 0 0 1 2.951 2.951c0 .772-.296 1.503-.835 2.058l-4.324 4.456-9.177-9.176C6.092 4.107 6.513 4 6.95 4ZM15 19v4a1.001 1.001 0 0 1-1.6.8l-4-3A.998.998 0 0 1 9 20v-3.844l-5.599-5.754a4.921 4.921 0 0 1-1.004-1.51 1 1 0 0 1 1.84-.784c.143.336.344.639.598.899l5.882 6.045a.999.999 0 0 1 .283.697v3.75l2 1.5v-2a1 1 0 0 1 2 0Z" />
  </svg>
));

FilterSlash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FilterSlash.displayName = 'FilterSlash';

export default FilterSlash;
