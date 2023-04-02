import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const AppsSort = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M7 0H4a4 4 0 0 0-4 4v3a4 4 0 0 0 4 4h3a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4Zm2 7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2ZM7 13H4a4 4 0 0 0-4 4v3a4 4 0 0 0 4 4h3a4 4 0 0 0 4-4v-3a4 4 0 0 0-4-4Zm2 7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2ZM22.293 19.049 20 21.339V2.633l2.293 2.29a1 1 0 1 0 1.414-1.415L21.12.925a3 3 0 0 0-4.24 0l-2.587 2.583a1 1 0 1 0 1.414 1.415L18 2.633v18.706l-2.293-2.29a1 1 0 1 0-1.414 1.415l2.587 2.583a3 3 0 0 0 4.24 0l2.587-2.583a1 1 0 1 0-1.414-1.415Z" />
  </svg>
));

AppsSort.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

AppsSort.displayName = 'AppsSort';

export default AppsSort;