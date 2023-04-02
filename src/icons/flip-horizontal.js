import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const FlipHorizontal = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M10.207.068H10.2a1 1 0 0 0-1.13.56L.375 19.759A3 3 0 0 0 3.106 24H10a1 1 0 0 0 1-1V1.046a1.01 1.01 0 0 0-.793-.978ZM9 22H3.106a1 1 0 0 1-.911-1.414L9 5.616ZM23.625 19.759 14.93.628a1.022 1.022 0 0 0-1.152-.557 1 1 0 0 0-.778.975V23a1 1 0 0 0 1 1h6.894a3 3 0 0 0 2.731-4.241Z" />
  </svg>
));

FlipHorizontal.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FlipHorizontal.displayName = 'FlipHorizontal';

export default FlipHorizontal;
