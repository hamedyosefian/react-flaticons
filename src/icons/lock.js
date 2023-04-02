import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Lock = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M19 8.424V7A7 7 0 0 0 5 7v1.424A5 5 0 0 0 2 13v6a5.006 5.006 0 0 0 5 5h10a5.006 5.006 0 0 0 5-5v-6a5 5 0 0 0-3-4.576ZM7 7a5 5 0 0 1 10 0v1H7Zm13 12a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3Z" />
    <path d="M12 14a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1Z" />
  </svg>
));

Lock.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Lock.displayName = 'Lock';

export default Lock;