import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ArrowUpRightFromSquare = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M20 11v8c0 2.757-2.243 5-5 5H5c-2.757 0-5-2.243-5-5V9c0-2.757 2.243-5 5-5h8a1 1 0 0 1 0 2H5C3.346 6 2 7.346 2 9v10c0 1.654 1.346 3 3 3h10c1.654 0 3-1.346 3-3v-8a1 1 0 0 1 2 0Zm1-11h-7a1 1 0 0 0 0 2h6.586L8.293 14.293a.999.999 0 1 0 1.414 1.414L22 3.414V10a1 1 0 0 0 2 0V3c0-1.654-1.346-3-3-3Z" />
    </svg>
  );
});

ArrowUpRightFromSquare.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowUpRightFromSquare.displayName = 'ArrowUpRightFromSquare';

export default ArrowUpRightFromSquare;
