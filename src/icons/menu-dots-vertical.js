import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const MenuDotsVertical = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <circle cx="12" cy="2" r="2" />
    <circle cx="12" cy="12" r="2" />
    <circle cx="12" cy="22" r="2" />
  </svg>
));

MenuDotsVertical.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MenuDotsVertical.displayName = 'MenuDotsVertical';

export default MenuDotsVertical;
