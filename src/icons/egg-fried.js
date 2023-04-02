import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const EggFried = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M9.5 5c-7.268.231-7.267 10.77 0 11 7.268-.231 7.267-10.77 0-11Zm0 9a3.5 3.5 0 0 1 0-7 3.5 3.5 0 0 1 0 7Zm10.024-8.678a2.3 2.3 0 0 1-1.212-.866A9.943 9.943 0 0 0 9.549.01 10.227 10.227 0 0 0 0 11a13.015 13.015 0 0 0 13 13 8.223 8.223 0 0 0 7.829-6.121 2.534 2.534 0 0 1 .829-1.389c3.903-3.053 2.629-9.775-2.134-11.168Zm.854 9.631a4.547 4.547 0 0 0-1.5 2.487A6.157 6.157 0 0 1 13 22 11.013 11.013 0 0 1 2 11c-.339-4.727 3.367-9.047 8-9a7.94 7.94 0 0 1 6.646 3.566A4.257 4.257 0 0 0 18.9 7.223a4.524 4.524 0 0 1 1.478 7.73ZM13 19a1 1 0 0 1-2 0 1 1 0 0 1 2 0Zm7-8a1 1 0 0 1-2 0 1 1 0 0 1 2 0Zm-4 6a1 1 0 0 1-2 0 1 1 0 0 1 2 0Z" />
  </svg>
));

EggFried.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

EggFried.displayName = 'EggFried';

export default EggFried;
