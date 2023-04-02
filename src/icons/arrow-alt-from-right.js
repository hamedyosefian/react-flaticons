import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ArrowAltFromRight = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M23 3a1 1 0 0 0-1 1v7H6V7.639c0-.695-.852-1.044-1.35-.552L.232 11.448a.773.773 0 0 0 0 1.104l4.418 4.361c.498.492 1.35.143 1.35-.552V13h16v7a1 1 0 0 0 2 0V4a1 1 0 0 0-1-1Z" />
  </svg>
));

ArrowAltFromRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowAltFromRight.displayName = 'ArrowAltFromRight';

export default ArrowAltFromRight;
