import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Copy = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M15 20H5a5.006 5.006 0 0 1-5-5V5a5.006 5.006 0 0 1 5-5h10a5.006 5.006 0 0 1 5 5v10a5.006 5.006 0 0 1-5 5zM5 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zm19 17V6a1 1 0 0 0-2 0v13a3 3 0 0 1-3 3H6a1 1 0 0 0 0 2h13a5.006 5.006 0 0 0 5-5z" />
    </svg>
  );
});

Copy.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Copy.displayName = 'Copy';

export default Copy;
