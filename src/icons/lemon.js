import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Lemon = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M18 13a1 1 0 0 1-2 0 1 1 0 0 1 2 0Zm-3-4a1 1 0 0 0 0 2 1 1 0 0 0 0-2Zm4 0a1 1 0 0 0 0 2 1 1 0 0 0 0-2Zm4.533-3.1C26.189 17.546 17.542 26.191 5.9 23.533c-.951-.382-1.9.51-2.9.467a3.016 3.016 0 0 1-2.622-4.455 2.131 2.131 0 0 0 .1-1.476c-.9-4.563-.882-9.434 3.4-14.195C8.634-.4 13.505-.421 18.068.477a2.138 2.138 0 0 0 1.478-.1A3.017 3.017 0 0 1 24 3c.043 1-.848 1.941-.467 2.9Zm-1.655-2.42A1.006 1.006 0 0 0 21 2c-1.1.337-2.075.829-3.41.419C9.416.477 1.9 5.229 2.005 14.013c-.23 2.092 1.22 4.6.119 6.507a1 1 0 0 0 1.354 1.358C5.4 20.8 7.865 22.239 9.987 22c2.059-.027 5.93-.49 8.724-3.284s3.257-6.67 3.289-8.729c.23-2.132-1.2-4.587-.122-6.509Z" />
  </svg>
));

Lemon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Lemon.displayName = 'Lemon';

export default Lemon;
