import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const AppsAdd = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M7 0H4a4 4 0 0 0-4 4v3a4 4 0 0 0 4 4h3a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4Zm2 7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2ZM7 13H4a4 4 0 0 0-4 4v3a4 4 0 0 0 4 4h3a4 4 0 0 0 4-4v-3a4 4 0 0 0-4-4Zm2 7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2ZM20 13h-3a4 4 0 0 0-4 4v3a4 4 0 0 0 4 4h3a4 4 0 0 0 4-4v-3a4 4 0 0 0-4-4Zm2 7a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2ZM14 7h3v3a1 1 0 0 0 2 0V7h3a1 1 0 0 0 0-2h-3V2a1 1 0 0 0-2 0v3h-3a1 1 0 0 0 0 2Z" />
  </svg>
));

AppsAdd.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

AppsAdd.displayName = 'AppsAdd';

export default AppsAdd;
