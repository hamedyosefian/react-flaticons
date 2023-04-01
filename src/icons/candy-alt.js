import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CandyAlt = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M15.715.036c-7.747-.75-12.666 8.645-7.74 14.575L.293 22.293a1 1 0 0 0 1.414 1.414l7.682-7.682C15.068 20.742 24.107 16.446 24 9A9.006 9.006 0 0 0 15.715.036ZM15 16a7.009 7.009 0 0 1-7-7C7.786 1.742 19.233-1.307 20 7a5.006 5.006 0 0 1-5 5 3 3 0 0 1 0-6 1.069 1.069 0 0 1 1 1 1 1 0 0 1-1 1 1 1 0 0 0 0 2 3 3 0 0 0 0-6 5.006 5.006 0 0 0-5 5c.606 7.788 11.2 5.628 11.92-1A7.009 7.009 0 0 1 15 16Z" />
    </svg>
  );
});

CandyAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CandyAlt.displayName = 'CandyAlt';

export default CandyAlt;
