import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Tenge = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M2 1a1 1 0 0 1 1-1h18a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1Zm19 3H3a1 1 0 0 0 0 2h8v17a1 1 0 0 0 2 0V6h8a1 1 0 0 0 0-2Z" />
    </svg>
  );
});

Tenge.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Tenge.displayName = 'Tenge';

export default Tenge;
