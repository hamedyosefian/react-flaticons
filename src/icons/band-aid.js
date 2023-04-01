import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const BandAid = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M9 10a1 1 0 1 1 1 1 1 1 0 0 1-1-1zm5 1a1 1 0 1 0-1-1 1 1 0 0 0 1 1zm-4 2a1 1 0 1 0 1 1 1 1 0 0 0-1-1zm4 2a1 1 0 1 0-1-1 1 1 0 0 0 1 1zm10-5v4a5.006 5.006 0 0 1-5 5H5a5.006 5.006 0 0 1-5-5v-4a5.006 5.006 0 0 1 5-5h14a5.006 5.006 0 0 1 5 5zM7 7v10h10V7zM5 17V7a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3zm17-7a3 3 0 0 0-3-3v10a3 3 0 0 0 3-3z" />
    </svg>
  );
});

BandAid.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BandAid.displayName = 'BandAid';

export default BandAid;
