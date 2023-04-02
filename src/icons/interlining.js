import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Interlining = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M10 6h13a1 1 0 0 0 0-2H10a1 1 0 0 0 0 2ZM23 11H10a1 1 0 0 0 0 2h13a1 1 0 0 0 0-2ZM23 18H10a1 1 0 0 0 0 2h13a1 1 0 0 0 0-2ZM6.087 6a.5.5 0 0 0 .353-.854L4 2.707a1 1 0 0 0-1.414 0L.147 5.146A.5.5 0 0 0 .5 6h1.794v12H.5a.5.5 0 0 0-.354.854l2.44 2.439a1 1 0 0 0 1.414 0l2.44-2.439A.5.5 0 0 0 6.087 18H4.294V6Z" />
  </svg>
));

Interlining.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Interlining.displayName = 'Interlining';

export default Interlining;
