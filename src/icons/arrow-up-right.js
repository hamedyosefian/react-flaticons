import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ArrowUpRight = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M20 0h-9a1 1 0 1 0 0 2h9c.179 0 .352.024.518.068L.293 22.293a.999.999 0 1 0 1.414 1.414L21.932 3.482c.044.165.068.339.068.518v9a1 1 0 1 0 2 0V4c0-2.206-1.794-4-4-4Z" />
    </svg>
  );
});

ArrowUpRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowUpRight.displayName = 'ArrowUpRight';

export default ArrowUpRight;
