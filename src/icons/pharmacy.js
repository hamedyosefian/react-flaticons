import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Pharmacy = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M12 24a4 4 0 0 1-4-4v-4H4a4 4 0 0 1 0-8h4V4a4 4 0 0 1 8 0v4h4a4 4 0 0 1 0 8h-4v4a4 4 0 0 1-4 4zM4 10a2 2 0 0 0 0 4h5a1 1 0 0 1 1 1v5a2 2 0 0 0 4 0v-5a1 1 0 0 1 1-1h5a2 2 0 0 0 0-4h-5a1 1 0 0 1-1-1V4a2 2 0 0 0-4 0v5a1 1 0 0 1-1 1z" />
  </svg>
));

Pharmacy.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Pharmacy.displayName = 'Pharmacy';

export default Pharmacy;
