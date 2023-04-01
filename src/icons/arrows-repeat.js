import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ArrowsRepeat = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M24 12c0 4.411-3.589 8-8 8H3l2.293 2.293a.999.999 0 1 1-1.414 1.414L.586 20.414a2.001 2.001 0 0 1 0-2.828l3.293-3.293a.999.999 0 1 1 1.414 1.414L3 18h13c3.309 0 6-2.691 6-6a1 1 0 1 1 2 0ZM1 13a1 1 0 0 0 1-1c0-3.309 2.691-6 6-6h13l-2.293 2.293a.999.999 0 1 0 1.414 1.414l3.293-3.293c.78-.779.78-2.049 0-2.828L20.121.293a.999.999 0 1 0-1.414 1.414L21 4H8c-4.411 0-8 3.589-8 8a1 1 0 0 0 1 1Z" />
    </svg>
  );
});

ArrowsRepeat.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowsRepeat.displayName = 'ArrowsRepeat';

export default ArrowsRepeat;
