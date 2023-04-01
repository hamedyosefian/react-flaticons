import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Tablet = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M17 0H7a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h10a5.006 5.006 0 0 0 5-5V5a5.006 5.006 0 0 0-5-5ZM7 2h10a3 3 0 0 1 3 3v12H4V5a3 3 0 0 1 3-3Zm10 20H7a3 3 0 0 1-3-3h7v1a1 1 0 0 0 2 0v-1h7a3 3 0 0 1-3 3Z" />
    </svg>
  );
});

Tablet.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Tablet.displayName = 'Tablet';

export default Tablet;
