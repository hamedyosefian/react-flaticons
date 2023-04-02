import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const School = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M19 6h-4.679A3.95 3.95 0 0 0 13 5.388V5l3.53-1.652a1 1 0 0 0 0-1.7l-3.2-1.5A1.637 1.637 0 0 0 11 1.636v3.752A3.937 3.937 0 0 0 9.68 6H5a5.006 5.006 0 0 0-5 5v10a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3V11a5.006 5.006 0 0 0-5-5Zm2.816 4h-2.159a3.017 3.017 0 0 1-2.121-.879L16.414 8H19a3 3 0 0 1 2.816 2ZM5 8h2.586L6.464 9.121A3.017 3.017 0 0 1 4.343 10H2.184A3 3 0 0 1 5 8Zm8 14h-2v-3a1 1 0 0 1 2 0Zm8 0h-6v-3a3 3 0 0 0-6 0v3H3a1 1 0 0 1-1-1v-9h2.343a4.968 4.968 0 0 0 3.535-1.465l2.708-2.707a2 2 0 0 1 2.828 0l2.708 2.707A4.968 4.968 0 0 0 19.657 12H22v9a1 1 0 0 1-1 1ZM7 15a1 1 0 0 1-1 1H5a1 1 0 0 1 0-2h1a1 1 0 0 1 1 1Zm0 4a1 1 0 0 1-1 1H5a1 1 0 0 1 0-2h1a1 1 0 0 1 1 1Zm13-4a1 1 0 0 1-1 1h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 1 1Zm0 4a1 1 0 0 1-1 1h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 1 1Zm-6-7a2 2 0 1 1-2-2 2 2 0 0 1 2 2Z" />
  </svg>
));

School.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

School.displayName = 'School';

export default School;
