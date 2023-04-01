import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const J = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M17 24H7c-2.757 0-5-2.243-5-5v-1c.006-1.308 1.995-1.307 2 0v1c0 1.654 1.346 3 3 3h10c1.654 0 3-1.346 3-3V1c.006-1.308 1.995-1.307 2 0v18c0 2.757-2.243 5-5 5Z" />
    </svg>
  );
});

J.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

J.displayName = 'J';

export default J;
