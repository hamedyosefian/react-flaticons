import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CaretSquareDown = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M19 24H5a5.006 5.006 0 0 1-5-5V5a5.006 5.006 0 0 1 5-5h14a5.006 5.006 0 0 1 5 5v14a5.006 5.006 0 0 1-5 5ZM5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3Zm1.269 8.6 5.087 5.154a.9.9 0 0 0 1.288 0l5.087-5.154a.924.924 0 0 0-.644-1.575H6.913a.924.924 0 0 0-.644 1.575Z" />
    </svg>
  );
});

CaretSquareDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CaretSquareDown.displayName = 'CaretSquareDown';

export default CaretSquareDown;
