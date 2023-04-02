import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const HamburgerSoda = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M19 12h-2.614l.54-4.331A3.017 3.017 0 0 0 14 4.017h-2.369c.109-.771.043-2.007 1.134-2.012H16a1 1 0 1 0 0-2h-3.235A3 3 0 0 0 9.79 2.633l-.173 1.384H3A3.021 3.021 0 0 0 .059 7.572L1.572 19.63a5.005 5.005 0 0 0 4.959 4.376L19 23.994a5 5 0 0 0 5-5V17a5 5 0 0 0-5-5Zm3 5H10a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3ZM14 6.016a1.011 1.011 0 0 1 .96 1.311L14.873 8h-3.74l.248-1.986ZM2.224 6.39A1 1 0 0 1 3 6.016h6.367L9.118 8H2.124l-.1-.77a.993.993 0 0 1 .2-.84Zm1.332 12.992L2.376 10h12.247l-.251 2H13a5 5 0 0 0-5 5c-.042 1.634-.1 3.74 1.036 5.01H6.531a3 3 0 0 1-2.975-2.628ZM19 22h-6a3 3 0 0 1-3-3h3.7c.387.186 2.875 2.111 3.3 2 .416.118 2.93-1.823 3.3-2H22a3 3 0 0 1-3 3Z" />
  </svg>
));

HamburgerSoda.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

HamburgerSoda.displayName = 'HamburgerSoda';

export default HamburgerSoda;
