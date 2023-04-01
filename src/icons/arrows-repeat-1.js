import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ArrowsRepeat1 = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M11 15v-3.586l-.293.293a.999.999 0 1 1-1.414-1.414l2-2A.999.999 0 0 1 13 9v6a1 1 0 1 1-2 0Zm12-4a1 1 0 0 0-1 1c0 3.309-2.691 6-6 6H3l2.293-2.293a.999.999 0 1 0-1.414-1.414L.586 17.586a2.001 2.001 0 0 0 0 2.828l3.293 3.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L3 20h13c4.411 0 8-3.589 8-8a1 1 0 0 0-1-1ZM1 13a1 1 0 0 0 1-1c0-3.309 2.691-6 6-6h13l-2.293 2.293a.999.999 0 1 0 1.414 1.414l3.293-3.293c.78-.779.78-2.049 0-2.828L20.121.293a.999.999 0 1 0-1.414 1.414L21 4H8c-4.411 0-8 3.589-8 8a1 1 0 0 0 1 1Z" />
    </svg>
  );
});

ArrowsRepeat1.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowsRepeat1.displayName = 'ArrowsRepeat1';

export default ArrowsRepeat1;
