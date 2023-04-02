import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const X = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="m13.292 12 8.482-10.367A1 1 0 1 0 20.225.368L12 10.421 3.774.367a1 1 0 0 0-1.549 1.265L10.708 12 2.226 22.367a1 1 0 1 0 1.549 1.265L12 13.579l8.226 10.053a1 1 0 0 0 1.549-1.265L13.292 12Z" />
  </svg>
));

X.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

X.displayName = 'X';

export default X;
