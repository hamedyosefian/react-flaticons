import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Notebook = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M19 3.022V1a1 1 0 0 0-2 0v1.1a5 5 0 0 0-1-.1h-1V1a1 1 0 0 0-2 0v1h-2V1a1 1 0 0 0-2 0v1H8a5 5 0 0 0-1 .1V1a1 1 0 0 0-2 0v2.022A4.979 4.979 0 0 0 3 7v12a5.006 5.006 0 0 0 5 5h8a5.006 5.006 0 0 0 5-5V7a4.979 4.979 0 0 0-2-3.978zM19 19a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3zM17 8a1 1 0 0 1-1 1H8a1 1 0 0 1 0-2h8a1 1 0 0 1 1 1zm0 4a1 1 0 0 1-1 1H8a1 1 0 0 1 0-2h8a1 1 0 0 1 1 1zm-4 4a1 1 0 0 1-1 1H8a1 1 0 0 1 0-2h4a1 1 0 0 1 1 1z" />
  </svg>
));

Notebook.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Notebook.displayName = 'Notebook';

export default Notebook;
