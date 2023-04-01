import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Copyright = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0Zm0 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1-10 10Z" />
      <path d="M15.536 8.464A1 1 0 0 0 16.95 7.05a7 7 0 1 0 0 9.9 1 1 0 0 0-1.414-1.414 5 5 0 1 1 0-7.072Z" />
    </svg>
  );
});

Copyright.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Copyright.displayName = 'Copyright';

export default Copyright;
