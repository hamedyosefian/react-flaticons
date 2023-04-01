import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Following = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M9 12a6 6 0 1 0-6-6 6.006 6.006 0 0 0 6 6ZM9 2a4 4 0 1 1-4 4 4 4 0 0 1 4-4ZM9 14a9.011 9.011 0 0 0-9 9 1 1 0 0 0 2 0 7 7 0 0 1 14 0 1 1 0 0 0 2 0 9.011 9.011 0 0 0-9-9ZM22 7.875a2.107 2.107 0 0 0-2 2.2 2.107 2.107 0 0 0-2-2.2 2.107 2.107 0 0 0-2 2.2c0 1.73 2.256 3.757 3.38 4.659a.992.992 0 0 0 1.24 0c1.124-.9 3.38-2.929 3.38-4.659a2.107 2.107 0 0 0-2-2.2Z" />
    </svg>
  );
});

Following.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Following.displayName = 'Following';

export default Following;
