import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ArrowAltCircleLeft = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0Zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10Zm6-10a1 1 0 0 1-1 1h-5v3.361c0 .695-.852 1.044-1.35.552l-4.418-4.361a.773.773 0 0 1 0-1.104l4.418-4.361c.498-.492 1.35-.143 1.35.552V11h5a1 1 0 0 1 1 1Z" />
  </svg>
));

ArrowAltCircleLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowAltCircleLeft.displayName = 'ArrowAltCircleLeft';

export default ArrowAltCircleLeft;