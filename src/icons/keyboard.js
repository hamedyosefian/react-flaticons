import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Keyboard = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M19 6h-6V3a1 1 0 0 0-2 0v3H5a5.006 5.006 0 0 0-5 5v4a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5v-4a5.006 5.006 0 0 0-5-5Zm3 9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3Z" />
      <path d="M15 14H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2ZM10 12h1a1 1 0 0 0 0-2h-1a1 1 0 0 0 0 2ZM19 10h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2ZM6 10H5a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Z" />
      <circle cx="5" cy="15" r="1" />
      <circle cx="19" cy="15" r="1" />
    </svg>
  );
});

Keyboard.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Keyboard.displayName = 'Keyboard';

export default Keyboard;
