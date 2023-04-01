import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ArrowCircleLeft = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M24 12a12 12 0 1 0-12 12 12.013 12.013 0 0 0 12-12ZM2 12a10 10 0 1 1 10 10A10.011 10.011 0 0 1 2 12Zm8.879 5.707a1 1 0 0 0 0-1.414L7.587 13 18 12.993a1 1 0 0 0 0-2L7.586 11l3.293-3.293A1 1 0 1 0 9.49 6.269l-.025.024-3.586 3.585a3 3 0 0 0 0 4.243l3.586 3.586a1 1 0 0 0 1.414 0Z" />
    </svg>
  );
});

ArrowCircleLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowCircleLeft.displayName = 'ArrowCircleLeft';

export default ArrowCircleLeft;
