import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Enter = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M7 22H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h2a1 1 0 0 0 0-2H5a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h2a1 1 0 0 0 0-2Z" />
    <path d="m23 11-15.777.032a2.018 2.018 0 0 1 .326-.446l3.879-3.879a1 1 0 1 0-1.414-1.414L6.133 9.172a4 4 0 0 0 0 5.656l3.879 3.879a1 1 0 1 0 1.414-1.414l-3.879-3.879a2.01 2.01 0 0 1-.291-.382L23 13a1 1 0 0 0 0-2Z" />
  </svg>
));

Enter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Enter.displayName = 'Enter';

export default Enter;
