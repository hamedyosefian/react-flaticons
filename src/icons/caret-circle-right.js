import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CaretCircleRight = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M24 12A12 12 0 1 1 12 0a12.013 12.013 0 0 1 12 12ZM2 12A10 10 0 1 0 12 2 10.011 10.011 0 0 0 2 12Zm9.6 5.731 5.154-5.087a.9.9 0 0 0 0-1.288L11.6 6.269a.924.924 0 0 0-1.575.644v10.174a.924.924 0 0 0 1.575.644Z" />
    </svg>
  );
});

CaretCircleRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CaretCircleRight.displayName = 'CaretCircleRight';

export default CaretCircleRight;
