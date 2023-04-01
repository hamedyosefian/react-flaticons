import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Archive = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M17 0H7a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h10a5.006 5.006 0 0 0 5-5V5a5.006 5.006 0 0 0-5-5ZM7 2h10a3 3 0 0 1 3 3v6H4V5a3 3 0 0 1 3-3Zm10 20H7a3 3 0 0 1-3-3v-6h16v6a3 3 0 0 1-3 3Z" />
      <path d="M11 7h2a1 1 0 0 0 0-2h-2a1 1 0 0 0 0 2ZM13 17h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2Z" />
    </svg>
  );
});

Archive.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Archive.displayName = 'Archive';

export default Archive;
