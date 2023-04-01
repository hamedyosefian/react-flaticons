import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ArrowToLeft = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M2.015 18.015V13.5a2.5 2.5 0 0 0 .233.285l4.95 4.95a1 1 0 1 0 1.414-1.414l-4.3-4.3h18.673a1 1 0 0 0 0-2H4.308l4.3-4.3A1 1 0 0 0 7.2 5.3l-4.95 4.95a2.491 2.491 0 0 0-.233.284V6.015a1 1 0 0 0-2 0v12a1 1 0 0 0 2 0Z" />
    </svg>
  );
});

ArrowToLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowToLeft.displayName = 'ArrowToLeft';

export default ArrowToLeft;
