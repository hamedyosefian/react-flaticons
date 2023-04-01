import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const MenuBurger = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <rect width="24" height="2" y="11" rx="1" />
      <rect width="24" height="2" y="4" rx="1" />
      <rect width="24" height="2" y="18" rx="1" />
    </svg>
  );
});

MenuBurger.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MenuBurger.displayName = 'MenuBurger';

export default MenuBurger;
