import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const LinkAlt = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M7.835 16.17a6.478 6.478 0 0 1-.641-.748 1 1 0 0 1 1.617-1.178c.129.178.274.349.437.511.803.803 1.87 1.245 3.005 1.245s2.203-.442 3.005-1.245l5.5-5.5c1.657-1.657 1.657-4.354 0-6.011s-4.354-1.657-6.011 0l-1.058 1.058a.999.999 0 1 1-1.414-1.414l1.058-1.058a6.255 6.255 0 0 1 8.839 0 6.257 6.257 0 0 1 0 8.839l-5.5 5.5C15.492 17.35 13.922 18 12.253 18s-3.239-.65-4.418-1.83ZM6.253 24c1.67 0 3.239-.65 4.419-1.831l1.058-1.058a.999.999 0 1 0-1.414-1.414l-1.059 1.058C8.454 21.558 7.387 22 6.252 22s-2.202-.442-3.005-1.245-1.245-1.87-1.245-3.005.442-2.203 1.245-3.005l5.5-5.5C9.55 8.442 10.617 8 11.752 8s2.203.442 3.005 1.245c.16.161.306.332.436.51a1 1 0 1 0 1.618-1.176 6.247 6.247 0 0 0-.639-.747C14.991 6.65 13.421 6 11.752 6s-3.239.65-4.419 1.831l-5.499 5.5A6.206 6.206 0 0 0 .003 17.75c0 1.669.65 3.239 1.831 4.419A6.205 6.205 0 0 0 6.253 24Z" />
  </svg>
));

LinkAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

LinkAlt.displayName = 'LinkAlt';

export default LinkAlt;
