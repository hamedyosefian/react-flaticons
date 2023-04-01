import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ArrowFromBottom = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M18 22h-5V2.823l4.3 4.3a1 1 0 0 0 1.414-1.414L13.768.763a2.5 2.5 0 0 0-3.536 0l-4.95 4.95A1 1 0 0 0 6.7 7.127l4.3-4.3V22H6a1 1 0 0 0 0 2h12a1 1 0 0 0 0-2Z" />
    </svg>
  );
});

ArrowFromBottom.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowFromBottom.displayName = 'ArrowFromBottom';

export default ArrowFromBottom;
