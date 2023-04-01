import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const RotateLeft = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M12 0a11.936 11.936 0 0 0-8 3.078V1a1 1 0 1 0-2 0v4c0 1.103.897 2 2 2h4a1 1 0 1 0 0-2H4.87A9.953 9.953 0 0 1 12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10c-5.21 0-9.492-3.908-9.959-9.09a1 1 0 0 0-1.992.18C.61 19.31 5.748 24 12 24c6.617 0 12-5.383 12-12S18.617 0 12 0Z" />
    </svg>
  );
});

RotateLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

RotateLeft.displayName = 'RotateLeft';

export default RotateLeft;
