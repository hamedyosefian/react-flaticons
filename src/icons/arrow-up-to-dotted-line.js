import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ArrowUpToDottedLine = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M5 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm9 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-4 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM2 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm20 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-4 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-3.879 4.879c-1.133-1.134-3.123-1.12-4.229-.014L5.306 9.279a1 1 0 1 0 1.387 1.441L11 6.575V23a1 1 0 0 0 2 0V6.575l4.307 4.145a.998.998 0 0 0 1.414-.028 1 1 0 0 0-.027-1.414l-4.572-4.4Z" />
    </svg>
  );
});

ArrowUpToDottedLine.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowUpToDottedLine.displayName = 'ArrowUpToDottedLine';

export default ArrowUpToDottedLine;
