import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const SidebarFlip = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M19 2H5C2.243 2 0 4.243 0 7v10c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5ZM2 17V7c0-1.654 1.346-3 3-3h8v16H5c-1.654 0-3-1.346-3-3Zm20 0c0 1.654-1.346 3-3 3h-4V4h4c1.654 0 3 1.346 3 3v10Zm-2-6a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1Zm0 4a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1Zm0-8a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1Z" />
    </svg>
  );
});

SidebarFlip.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SidebarFlip.displayName = 'SidebarFlip';

export default SidebarFlip;
