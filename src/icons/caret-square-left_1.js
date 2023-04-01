import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CaretSquareLeft1 = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M0 19V5a5.006 5.006 0 0 1 5-5h14a5.006 5.006 0 0 1 5 5v14a5.006 5.006 0 0 1-5 5H5a5.006 5.006 0 0 1-5-5ZM22 5a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3Zm-8.6 1.269-5.15 5.087a.9.9 0 0 0 0 1.288l5.15 5.087a.924.924 0 0 0 1.575-.644V6.913a.924.924 0 0 0-1.575-.644Z" />
    </svg>
  );
});

CaretSquareLeft1.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CaretSquareLeft1.displayName = 'CaretSquareLeft1';

export default CaretSquareLeft1;
