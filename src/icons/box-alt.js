import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const BoxAlt = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M19 0H5a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V5a5.006 5.006 0 0 0-5-5zm3 5h-7V2h4a3 3 0 0 1 3 3zM11 2h2v5a1 1 0 0 1-2 0zM5 2h4v3H2a3 3 0 0 1 3-3zm14 20H5a3 3 0 0 1-3-3V7h7a3 3 0 0 0 6 0h7v12a3 3 0 0 1-3 3zm1-3a1 1 0 0 1-1 1h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 1 1z" />
  </svg>
));

BoxAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BoxAlt.displayName = 'BoxAlt';

export default BoxAlt;
