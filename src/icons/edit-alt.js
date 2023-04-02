import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const EditAlt = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M9.288 13.067c-2.317.446-3.465 3.026-3.963 4.634A1 1 0 0 0 6.281 19H10a3 3 0 0 0 2.988-3.274 3.107 3.107 0 0 0-3.7-2.659Z" />
    <path d="M23 8.979a1 1 0 0 0-1 1V15h-4a3 3 0 0 0-3 3v4H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h11.042a1 1 0 0 0 0-2H5a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h11.343a4.966 4.966 0 0 0 3.535-1.464l2.658-2.658A4.966 4.966 0 0 0 24 16.343V9.979a1 1 0 0 0-1-1Zm-4.536 12.143a3.022 3.022 0 0 1-1.464.8V18a1 1 0 0 1 1-1h3.925a3.022 3.022 0 0 1-.8 1.464Z" />
    <path d="M14.566 14.17a1 1 0 0 1-.707-1.707l7.853-7.853a.943.943 0 0 0 0-1.335.9.9 0 0 0-.694-.275.933.933 0 0 0-.678.314l-7.6 8.407a1 1 0 0 1-1.484-1.341l7.6-8.4A2.949 2.949 0 0 1 20.963 1a2.985 2.985 0 0 1 2.163.862 2.947 2.947 0 0 1 0 4.163l-7.853 7.853a.993.993 0 0 1-.707.292Z" />
  </svg>
));

EditAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

EditAlt.displayName = 'EditAlt';

export default EditAlt;
