import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const HomeLocationAlt = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M24 9.724V19a5.006 5.006 0 0 1-5 5h-1a1 1 0 0 1 0-2h1a3 3 0 0 0 3-3V9.724a3 3 0 0 0-1.322-2.487l-7-4.723a2.979 2.979 0 0 0-3.356 0l-7 4.723A3 3 0 0 0 2 9.724V19a3 3 0 0 0 3 3h1a1 1 0 0 1 0 2H5a5.006 5.006 0 0 1-5-5V9.724a4.993 4.993 0 0 1 2.2-4.145l7-4.724a4.981 4.981 0 0 1 5.594 0l7 4.724A5 5 0 0 1 24 9.724Zm-5 5.283a6.952 6.952 0 0 1-2.05 4.949l-3.515 3.438a2.063 2.063 0 0 1-2.87 0l-3.507-3.43A7 7 0 1 1 19 15.007Zm-2 0a5 5 0 1 0-8.536 3.535l3.5 3.422 3.58-3.43A4.958 4.958 0 0 0 17 15.007ZM15 15a3 3 0 1 1-3-3 3 3 0 0 1 3 3Z" />
  </svg>
));

HomeLocationAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

HomeLocationAlt.displayName = 'HomeLocationAlt';

export default HomeLocationAlt;
