import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Bed = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M19 6h-6a4.987 4.987 0 0 0-4.416 2.705A3.464 3.464 0 0 0 6.5 8 3.5 3.5 0 0 0 3 11.5a3.464 3.464 0 0 0 .351 1.5H2V3a1 1 0 0 0-2 0v18a1 1 0 0 0 2 0v-2h20v2a1 1 0 0 0 2 0V11a5.006 5.006 0 0 0-5-5Zm-9 5a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v2H10Zm-5 .5A1.5 1.5 0 1 1 6.5 13 1.5 1.5 0 0 1 5 11.5ZM2 17v-2h20v2Z" />
    </svg>
  );
});

Bed.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Bed.displayName = 'Bed';

export default Bed;
