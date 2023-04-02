import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CaretCircleDown = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M12 24a12 12 0 1 1 12-12 12.013 12.013 0 0 1-12 12Zm0-22a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm-5.731 9.6 5.087 5.154a.9.9 0 0 0 1.288 0l5.087-5.154a.924.924 0 0 0-.644-1.575H6.913a.924.924 0 0 0-.644 1.575Z" />
  </svg>
));

CaretCircleDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CaretCircleDown.displayName = 'CaretCircleDown';

export default CaretCircleDown;