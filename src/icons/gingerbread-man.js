import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const GingerbreadMan = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M21.634 7.564A3.084 3.084 0 0 0 17.919 6.2l-1.211.419a4.984 4.984 0 1 0-9.415 0L6.078 6.2a3 3 0 1 0-2.061 5.635l1.636.566c1.7.57 1.581 2.752.728 4l-1.849 2.891A3.025 3.025 0 0 0 7.4 23.973a2.992 2.992 0 0 0 2.115-1.341l2.385-3.576a.165.165 0 0 1 .147-.079c.057-.02.115.027.15.082l2.219 3.463a3 3 0 1 0 5.113-3.141l-1.906-2.976c-.852-1.25-.976-3.435.728-4.005l1.632-.564a3.019 3.019 0 0 0 1.651-4.272ZM12 2a2.994 2.994 0 0 1 .314 5.968 4.311 4.311 0 0 1-.612 0A2.994 2.994 0 0 1 12 2Zm7.932 7.363a1 1 0 0 1-.607.582l-1.633.565c-2.923.946-3.355 4.678-1.756 6.974l1.906 2.976a1 1 0 1 1-1.746.983l-2.219-3.464a2.171 2.171 0 0 0-1.815-1 2.107 2.107 0 0 0-1.833.972l-2.386 3.59a1.007 1.007 0 0 1-1.522.2 1.085 1.085 0 0 1-.1-1.365l1.848-2.885c1.6-2.3 1.167-6.029-1.757-6.974l-1.643-.572a1 1 0 1 1 .756-1.854C6.816 8.529 10.582 10.077 12 10c1.418.079 5.189-1.483 6.572-1.91a1.015 1.015 0 0 1 1.36 1.273ZM13 12a1 1 0 0 1-2 0 1 1 0 0 1 2 0Zm0 3a1 1 0 0 1-2 0 1 1 0 0 1 2 0Z" />
  </svg>
));

GingerbreadMan.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

GingerbreadMan.displayName = 'GingerbreadMan';

export default GingerbreadMan;