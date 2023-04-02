import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Crown = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M22.766 4.566a1.994 1.994 0 0 0-2.18.434L18 7.586 13.414 3a2 2 0 0 0-2.828 0L6 7.586 3.414 5A2 2 0 0 0 0 6.414V17a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V6.414a2 2 0 0 0-1.234-1.848ZM22 17a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6.414l3.293 3.293a1 1 0 0 0 1.414 0L12 4.414l5.293 5.293a1 1 0 0 0 1.414 0L22 6.414Z" />
  </svg>
));

Crown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Crown.displayName = 'Crown';

export default Crown;