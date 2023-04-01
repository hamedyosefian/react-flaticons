import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ArrowToRight = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M21.985 6.015v4.518a2.417 2.417 0 0 0-.233-.285L16.8 5.3a1 1 0 1 0-1.414 1.414l4.3 4.3H1.015a1 1 0 0 0 0 2h18.677l-4.3 4.3a1 1 0 1 0 1.408 1.419l4.95-4.95a2.5 2.5 0 0 0 .233-.285v4.517a1 1 0 0 0 2 0v-12a1 1 0 0 0-2 0Z" />
    </svg>
  );
});

ArrowToRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowToRight.displayName = 'ArrowToRight';

export default ArrowToRight;
