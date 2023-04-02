import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const BadgeSheriff = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M21 15c-.151 0-.298.017-.44.049l-1.39-2.447a1.227 1.227 0 0 1 0-1.204l1.39-2.447A1.998 1.998 0 0 0 23 7a2 2 0 0 0-3.731-1h-3.138a1.22 1.22 0 0 1-1.06-.617l-1.347-2.371c.175-.297.276-.643.276-1.011 0-1.103-.897-2-2-2s-2 .897-2 2c0 .369.101.714.276 1.011L8.929 5.383A1.22 1.22 0 0 1 7.869 6H4.731A2 2 0 1 0 3.44 8.951l1.39 2.447c.211.371.211.833 0 1.204l-1.39 2.447A1.998 1.998 0 0 0 1 17a2 2 0 0 0 3.731 1h3.138c.438 0 .844.236 1.06.617l1.347 2.372A1.984 1.984 0 0 0 10 22c0 1.103.897 2 2 2s2-.897 2-2c0-.369-.101-.714-.276-1.011l1.347-2.372c.216-.38.622-.616 1.06-.616h3.138a2 2 0 1 0 1.731-3Zm-3.569-1.41L18.8 16h-2.669a3.223 3.223 0 0 0-2.799 1.629L12 19.975l-1.332-2.345A3.222 3.222 0 0 0 7.869 16H5.2l1.369-2.411a3.23 3.23 0 0 0 0-3.178L5.2 8h2.669a3.224 3.224 0 0 0 2.799-1.63L12 4.025l1.332 2.345A3.224 3.224 0 0 0 16.131 8H18.8l-1.369 2.411a3.233 3.233 0 0 0 0 3.179ZM12 9c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3Zm0 4c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1Z" />
  </svg>
));

BadgeSheriff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BadgeSheriff.displayName = 'BadgeSheriff';

export default BadgeSheriff;