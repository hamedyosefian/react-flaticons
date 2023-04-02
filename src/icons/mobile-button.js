import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const MobileButton = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M15 24H9c-2.757 0-5-2.243-5-5V5c0-2.757 2.243-5 5-5h6c2.757 0 5 2.243 5 5v14c0 2.757-2.243 5-5 5ZM9 2C7.346 2 6 3.346 6 5v14c0 1.654 1.346 3 3 3h6c1.654 0 3-1.346 3-3V5c0-1.654-1.346-3-3-3H9Zm5 17a1 1 0 0 0-1-1h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Z" />
  </svg>
));

MobileButton.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MobileButton.displayName = 'MobileButton';

export default MobileButton;