import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ToolMarquee = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M24 18v1a5.006 5.006 0 0 1-5 5h-1a1 1 0 0 1 0-2h1a3 3 0 0 0 3-3v-1a1 1 0 0 1 2 0zM19 0h-1a1 1 0 0 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 0 0 2 0V5a5.006 5.006 0 0 0-5-5zm4 9a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1zM6 22H5a3 3 0 0 1-3-3v-1a1 1 0 0 0-2 0v1a5.006 5.006 0 0 0 5 5h1a1 1 0 0 0 0-2zM6 0H5a5.006 5.006 0 0 0-5 5v1a1 1 0 0 0 2 0V5a3 3 0 0 1 3-3h1a1 1 0 0 0 0-2zM1 15a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1zm9-13h3.932a1 1 0 0 0 0-2H10a1 1 0 0 0 0 2zm4 20h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2z" />
    </svg>
  );
});

ToolMarquee.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ToolMarquee.displayName = 'ToolMarquee';

export default ToolMarquee;
