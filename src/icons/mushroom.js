import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Mushroom = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M12 0C5.383 0 0 5.083 0 11.33c.034 4.28 4.67 4.22 7.728 2.6A30.508 30.508 0 0 0 7 19a5 5 0 0 0 10 0 30.508 30.508 0 0 0-.728-5.071c3.7 1.888 7.786 1.294 7.728-2.6C24 5.083 18.617 0 12 0Zm3 19a3 3 0 0 1-6 0 32.594 32.594 0 0 1 .936-5.77 9.548 9.548 0 0 1 4.128 0A32.594 32.594 0 0 1 15 19Zm5-6c-2.62-.38-4.632-2.09-8-2-3.366-.091-5.383 1.621-8 2-1.758 0-2-.8-2-1.67C2 6.186 6.486 2 12 2s10 4.186 10 9.33c0 1.083-.319 1.67-2 1.67Z" />
  </svg>
));

Mushroom.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Mushroom.displayName = 'Mushroom';

export default Mushroom;
