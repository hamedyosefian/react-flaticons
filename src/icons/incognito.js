import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Incognito = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M16.5 17a3.5 3.5 0 0 0-3.235 2.174 4.685 4.685 0 0 0-2.53 0 3.494 3.494 0 1 0 .193 2.033A3.52 3.52 0 0 1 12 21a3.514 3.514 0 0 1 1.072.207A3.5 3.5 0 1 0 16.5 17Zm-9 5A1.5 1.5 0 1 1 9 20.5 1.5 1.5 0 0 1 7.5 22Zm9 0a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5Zm3.475-13.325C19.709.612 15.3.026 15.105.006A.924.924 0 0 0 15 0a4.509 4.509 0 0 0-2.416.818 1.018 1.018 0 0 1-1.167 0A4.514 4.514 0 0 0 9 0a.924.924 0 0 0-.1.006c-.194.02-4.6.606-4.87 8.669C2.693 9.122 0 10.243 0 12c0 3.69 6.194 4 12 4s12-.31 12-4c0-1.757-2.693-2.878-4.025-3.325Zm-10.92-6.67a2.632 2.632 0 0 1 1.215.452 3.026 3.026 0 0 0 3.461 0 2.64 2.64 0 0 1 1.206-.452c.445.106 2.909.964 3.056 6.858A13.207 13.207 0 0 1 12 10a13.217 13.217 0 0 1-5.993-1.136C6.155 2.92 8.658 2.1 9.055 2.005ZM12 14c-8.265 0-10-1.088-10.012-1.918a6.04 6.04 0 0 1 2.86-1.574A14.557 14.557 0 0 0 12 12a14.557 14.557 0 0 0 7.152-1.492A6.829 6.829 0 0 1 22 12c0 .912-1.735 2-10 2Z" />
  </svg>
));

Incognito.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Incognito.displayName = 'Incognito';

export default Incognito;