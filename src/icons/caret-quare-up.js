import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CaretQuareUp = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M5 0h14a5.006 5.006 0 0 1 5 5v14a5.006 5.006 0 0 1-5 5H5a5.006 5.006 0 0 1-5-5V5a5.006 5.006 0 0 1 5-5Zm14 22a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3Zm-1.269-8.6-5.087-5.15a.9.9 0 0 0-1.288 0L6.269 13.4a.924.924 0 0 0 .644 1.575h10.174a.924.924 0 0 0 .644-1.575Z" />
    </svg>
  );
});

CaretQuareUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CaretQuareUp.displayName = 'CaretQuareUp';

export default CaretQuareUp;
