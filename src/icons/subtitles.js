import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Subtitles = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M19 22H5a5.006 5.006 0 0 1-5-5V7a5.006 5.006 0 0 1 5-5h14a5.006 5.006 0 0 1 5 5v10a5.006 5.006 0 0 1-5 5ZM5 4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Z" />
    <path d="M19 13h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2ZM7 13H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2ZM13 18H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2ZM19 18h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
  </svg>
));

Subtitles.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Subtitles.displayName = 'Subtitles';

export default Subtitles;
