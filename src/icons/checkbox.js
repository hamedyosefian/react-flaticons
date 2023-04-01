import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Checkbox = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M19 0H5a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V5a5.006 5.006 0 0 0-5-5Zm3 19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3Z" />
      <path d="M9.333 15.919 5.414 12A1 1 0 0 0 4 12a1 1 0 0 0 0 1.414l3.919 3.919a2 2 0 0 0 2.829 0L20 8.081a1 1 0 0 0 0-1.414 1 1 0 0 0-1.414 0Z" />
    </svg>
  );
});

Checkbox.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Checkbox.displayName = 'Checkbox';

export default Checkbox;
