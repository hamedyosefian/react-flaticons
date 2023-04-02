import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const MenuDots = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <circle cx="2" cy="12" r="2" />
    <circle cx="12" cy="12" r="2" />
    <circle cx="22" cy="12" r="2" />
  </svg>
));

MenuDots.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MenuDots.displayName = 'MenuDots';

export default MenuDots;
