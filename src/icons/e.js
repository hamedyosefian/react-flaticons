import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const E = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M21 22H7c-1.654 0-3-1.346-3-3v-6h13c1.308-.006 1.307-1.995 0-2H4V5c0-1.654 1.346-3 3-3h14c1.308-.006 1.307-1.995 0-2H7C4.243 0 2 2.243 2 5v14c0 2.757 2.243 5 5 5h14c1.308-.006 1.307-1.995 0-2Z" />
    </svg>
  );
});

E.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

E.displayName = 'E';

export default E;
