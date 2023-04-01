import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Italic = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M20 0H7a1 1 0 0 0 0 2h5.354L9.627 22H4a1 1 0 0 0 0 2h13a1 1 0 0 0 0-2h-5.354l2.727-20H20a1 1 0 0 0 0-2Z" />
    </svg>
  );
});

Italic.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Italic.displayName = 'Italic';

export default Italic;
