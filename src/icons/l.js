import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const L = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M21 24H7c-2.757 0-5-2.243-5-5V1C2.006-.308 3.994-.307 4 1v18c0 1.654 1.346 3 3 3h14c1.308.006 1.307 1.995 0 2Z" />
    </svg>
  );
});

L.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

L.displayName = 'L';

export default L;
