import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const TireRugged = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M12 5c-9.251.3-9.249 13.707 0 14 9.251-.3 9.249-13.707 0-14Zm0 12c-6.608-.21-6.606-9.791 0-10 6.608.21 6.606 9.791 0 10Zm10.611-7.9a10.961 10.961 0 0 0-1.055-2.542 2.006 2.006 0 0 0-.364-2.332l-1.414-1.418a2.015 2.015 0 0 0-2.331-.367A9.4 9.4 0 0 0 14.9 1.385 2 2 0 0 0 13 0h-2a2 2 0 0 0-1.9 1.387 9.215 9.215 0 0 0-2.55 1.055 1.984 1.984 0 0 0-.913-.22 1.947 1.947 0 0 0-1.416.586L2.808 4.222a2 2 0 0 0-.363 2.331A11.116 11.116 0 0 0 1.386 9.1 2 2 0 0 0 0 11v2a2 2 0 0 0 1.392 1.9 11.67 11.67 0 0 0 1.054 2.538 2 2 0 0 0 .362 2.335l1.414 1.414a2.007 2.007 0 0 0 2.32.37A7.4 7.4 0 0 0 9.1 22.62 2 2 0 0 0 11 24h2a2 2 0 0 0 1.9-1.382 7.407 7.407 0 0 0 2.557-1.056 2.006 2.006 0 0 0 2.319-.37l1.414-1.414a2.024 2.024 0 0 0 .365-2.34 12.085 12.085 0 0 0 1.057-2.538A2 2 0 0 0 24 13v-2a2 2 0 0 0-1.389-1.9ZM22 13a.979.979 0 0 0-.171.015c-.243.042-.838.246-1.111 1.225a9.748 9.748 0 0 1-.926 2.255c-.572.995-.28 1.57-.014 1.869l-1.413 1.415a1.106 1.106 0 0 0-.095-.085 1.507 1.507 0 0 0-1.855.156 5.416 5.416 0 0 1-2.13.857 1.481 1.481 0 0 0-1.274 1.148A1 1 0 0 0 13 22h-2a1 1 0 0 0-.011-.145 1.479 1.479 0 0 0-1.273-1.147 5.414 5.414 0 0 1-2.131-.859 1.524 1.524 0 0 0-1.855-.155 1.081 1.081 0 0 0-.094.084l-1.372-1.459c.224-.254.516-.829-.057-1.825a9.8 9.8 0 0 1-.926-2.255c-.272-.978-.867-1.182-1.11-1.224A.979.979 0 0 0 2 13v-2a.929.929 0 0 0 .15-.012c.254-.038.871-.235 1.132-1.231a8.933 8.933 0 0 1 .908-2.226c.621-1.064.283-1.648.032-1.895l1.429-1.4c.172.163.813.643 1.893-.055a7.308 7.308 0 0 1 2.2-.9C10.933 2.985 11.006 2.206 11 2l2-.026c-.006.232.067 1.011 1.255 1.312a7.329 7.329 0 0 1 2.2.9c1.079.7 1.721.219 1.907.04l1.419 1.409c-.256.252-.594.836.026 1.9a8.942 8.942 0 0 1 .909 2.228c.261 1 .878 1.193 1.132 1.231A.929.929 0 0 0 22 11Zm-9-4a1 1 0 0 1-2 0 1 1 0 0 1 2 0Zm2 2a1 1 0 0 1 0 2 1 1 0 0 1 0-2Zm-5 1a1 1 0 0 1-2 0 1 1 0 0 1 2 0Zm3 3a1 1 0 0 1-2 0 1 1 0 0 1 2 0Z" />
  </svg>
));

TireRugged.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TireRugged.displayName = 'TireRugged';

export default TireRugged;