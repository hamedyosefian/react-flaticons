import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Barcode = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M1 22a1 1 0 0 1-1-1V3a1 1 0 1 1 2 0v18a1 1 0 0 1-1 1Zm5-1V3a1 1 0 1 0-2 0v18a1 1 0 1 0 2 0Zm15 0V3a1 1 0 1 0-2 0v18a1 1 0 1 0 2 0Zm-8 0V3a1 1 0 1 0-2 0v18a1 1 0 1 0 2 0Zm-3-.5v-17a1.5 1.5 0 1 0-3 0v17a1.5 1.5 0 1 0 3 0Zm8 0v-17a1.5 1.5 0 1 0-3 0v17a1.5 1.5 0 1 0 3 0Zm6 .5V3a1 1 0 1 0-2 0v18a1 1 0 1 0 2 0Z" />
    </svg>
  );
});

Barcode.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Barcode.displayName = 'Barcode';

export default Barcode;
