import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CaretSquareRight = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M24 5v14a5.006 5.006 0 0 1-5 5H5a5.006 5.006 0 0 1-5-5V5a5.006 5.006 0 0 1 5-5h14a5.006 5.006 0 0 1 5 5ZM2 19a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3Zm8.6-1.269 5.154-5.087a.9.9 0 0 0 0-1.288L10.6 6.269a.924.924 0 0 0-1.575.644v10.174a.924.924 0 0 0 1.575.644Z" />
    </svg>
  );
});

CaretSquareRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CaretSquareRight.displayName = 'CaretSquareRight';

export default CaretSquareRight;
