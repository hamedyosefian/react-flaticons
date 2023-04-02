import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const LuggageRolling = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M19 8h-2V5A5 5 0 0 0 7 5v3H5a5.006 5.006 0 0 0-5 5v4a5 5 0 0 0 3 4.576V23a1 1 0 0 0 2 0v-1h14v1a1 1 0 0 0 2 0v-1.424A5 5 0 0 0 24 17v-4a5.006 5.006 0 0 0-5-5ZM9 5a3 3 0 0 1 6 0v3H9Zm13 12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3Zm-5-4a1 1 0 0 1-1 1H8a1 1 0 0 1 0-2h8a1 1 0 0 1 1 1Z" />
  </svg>
));

LuggageRolling.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

LuggageRolling.displayName = 'LuggageRolling';

export default LuggageRolling;