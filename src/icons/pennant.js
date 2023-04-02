import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Pennant = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M21.93 9.147 3.43 3.4A2 2 0 1 0 1 3.732V23a1 1 0 0 0 2 0v-2.264l18.949-5.89a3 3 0 0 0-.019-5.7Zm-20.9-5.4s0 .006-.001.002Zm20.307 9.193L3 18.642V5.358l18.316 5.693a1 1 0 0 1 .02 1.891Z" />
  </svg>
));

Pennant.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Pennant.displayName = 'Pennant';

export default Pennant;