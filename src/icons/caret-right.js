import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CaretRight = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M9 17.88V6.71A1 1 0 0 1 10.71 6l5.58 5.59a1 1 0 0 1 0 1.41l-5.58 5.59A1 1 0 0 1 9 17.88Z" />
    </svg>
  );
});

CaretRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CaretRight.displayName = 'CaretRight';

export default CaretRight;
