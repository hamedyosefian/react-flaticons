import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Smartphone = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M15 0H9a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h6a5.006 5.006 0 0 0 5-5V5a5.006 5.006 0 0 0-5-5ZM9 2h6a3 3 0 0 1 3 3v11H6V5a3 3 0 0 1 3-3Zm6 20H9a3 3 0 0 1-3-3v-1h12v1a3 3 0 0 1-3 3Z" />
      <circle cx="12" cy="20" r="1" />
    </svg>
  );
});

Smartphone.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Smartphone.displayName = 'Smartphone';

export default Smartphone;
