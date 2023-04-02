import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Shrimp = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M14 4a1 1 0 0 1 2 0 1 1 0 0 1-2 0Zm10 17a3 3 0 0 1-3 3h-9c-6.573.157-12.159-5.708-12-12.225A12.247 12.247 0 0 1 12.365 0L23 .023a1 1 0 0 1 0 2h-1.065A7.889 7.889 0 0 1 13.815 9a6.973 6.973 0 0 0-4.021 1.278A2.876 2.876 0 0 0 12 11a1 1 0 0 1 0 2 4.736 4.736 0 0 1-3.653-1.349A6.325 6.325 0 0 0 7.2 13.944 3.683 3.683 0 0 0 10 15a1 1 0 0 1 1 1c-.163 1.87-3.22.675-3.943.307A6.516 6.516 0 0 0 13.5 22c1.309-1.023 5.442-4 7.5-4a3 3 0 0 1 3 3ZM11 4.5A2.589 2.589 0 0 0 14 7a6.011 6.011 0 0 0 5.915-4.983L13.476 2A2.5 2.5 0 0 0 11 4.5ZM4.5 5.511a4.081 4.081 0 0 0 3.625 3.53A8.978 8.978 0 0 1 10.346 7.7a4.478 4.478 0 0 1-.795-5.316A10.5 10.5 0 0 0 4.5 5.511Zm2.039 14.871a8.337 8.337 0 0 1-1.514-5.4 5.271 5.271 0 0 1-2.677-.367 10.037 10.037 0 0 0 4.191 5.767Zm0-9.649a6.151 6.151 0 0 1-3.479-3.1A9.557 9.557 0 0 0 2 11.793c.231.438 1.081 1.58 3.425 1.114a8.356 8.356 0 0 1 1.117-2.174ZM22 21c-.4-2.2-2.947-.233-4.95 1H21a1 1 0 0 0 1-1Z" />
  </svg>
));

Shrimp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Shrimp.displayName = 'Shrimp';

export default Shrimp;
