import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Olives = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M18.074 7.1c.2-1.442.98-4.1 3.926-4.1a1 1 0 0 0 1-1c-.225-2.068-3.847-.488-4.529.167C16.687.74 13.411.134 10 0 7.847.022 2.077.783 2 3.5c-.035 1.583 1.7 2.109 2.9 2.588-3.152 1.775-5.61 6.5-4.736 9.941.951 4.772 6.889 6.427 10.6 3.429C14.17 27.378 24.189 24.205 24 15.5c0-4.4-2.483-7.806-5.926-8.4Zm-4.142.71a6.038 6.038 0 0 0-.925-1.071 21 21 0 0 0 3.247-.782 9.4 9.4 0 0 0-.2 1.121 6.2 6.2 0 0 0-2.122.733ZM4.006 3.5c3.4-2.275 10.318-1.53 12.988.008C14.315 5.03 7.415 5.78 4.006 3.5Zm.01 14.825c-6.355-4.482 3.7-16.064 8.329-9.263-1.848 1.835-2.752 5.392-2.184 8.316-1.961 1.737-4.3 2.111-6.145.943ZM17 22c-6.63.029-6.628-13.03 0-13 6.63-.029 6.628 13.03 0 13Zm1-3a1 1 0 0 1-1 1c-1.738 0-3-1.683-3-4a1 1 0 0 1 2 0c0 1.1.449 2 1 2a1 1 0 0 1 1 1ZM6.681 11.24c1.263 1.136-1.417 2.354-.43 3.58a1 1 0 0 1-1.3 1.52c-1.5-1.281-.94-3.573.32-4.99a1 1 0 0 1 1.41-.11Z" />
  </svg>
));

Olives.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Olives.displayName = 'Olives';

export default Olives;