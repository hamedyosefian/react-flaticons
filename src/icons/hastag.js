import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Hastag = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M23 7h-4.809l.8-5.865a1 1 0 1 0-1.982-.27L16.173 7H9.191l.8-5.865a1 1 0 1 0-1.982-.27L7.173 7H2a1 1 0 0 0 0 2h4.9l-.818 6H1a1 1 0 0 0 0 2h4.809l-.8 5.865a1 1 0 0 0 1.982.27L7.827 17h6.982l-.8 5.865a1 1 0 0 0 1.982.27L16.827 17H22a1 1 0 0 0 0-2h-4.9l.818-6H23a1 1 0 0 0 0-2Zm-7.918 8H8.1l.818-6H15.9Z" />
  </svg>
));

Hastag.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Hastag.displayName = 'Hastag';

export default Hastag;
