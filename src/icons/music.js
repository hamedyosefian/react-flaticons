import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Music = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M19 1h-6a5.006 5.006 0 0 0-5 5v8.026A4.948 4.948 0 0 0 5 13a5 5 0 1 0 5 5V6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v8.026A4.948 4.948 0 0 0 19 13a5 5 0 1 0 5 5V6a5.006 5.006 0 0 0-5-5ZM5 21a3 3 0 1 1 3-3 3 3 0 0 1-3 3Zm14 0a3 3 0 1 1 3-3 3 3 0 0 1-3 3Z" />
    </svg>
  );
});

Music.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Music.displayName = 'Music';

export default Music;
