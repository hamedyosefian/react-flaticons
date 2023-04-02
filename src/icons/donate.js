import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Donate = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M12 20c5.514 0 10-4.486 10-10S17.514 0 12 0 2 4.486 2 10s4.486 10 10 10Zm0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8Zm12 18.5c0 1.93-1.57 3.5-3.5 3.5h-17C1.57 24 0 22.43 0 20.5c0-1.094.522-2.139 1.396-2.797A1 1 0 0 1 2.599 19.3a1.502 1.502 0 0 0 .901 2.699h17a1.502 1.502 0 0 0 .9-2.7 1 1 0 0 1 1.204-1.597A3.479 3.479 0 0 1 24 20.5ZM14 12a.77.77 0 0 0-.644-.761l-3.041-.506A2.763 2.763 0 0 1 8 8c0-1.654 1.346-3 3-3V4a1 1 0 1 1 2 0v1h.268a3.01 3.01 0 0 1 2.598 1.499 1 1 0 0 1-1.731 1.002A1.003 1.003 0 0 0 13.268 7H11c-.551 0-1 .448-1 1a.77.77 0 0 0 .644.761l3.041.506A2.763 2.763 0 0 1 16 12c0 1.654-1.346 3-3 3v1a1 1 0 1 1-2 0v-1h-.268a3.01 3.01 0 0 1-2.598-1.499 1 1 0 0 1 1.731-1.002c.179.31.511.501.867.501H13c.551 0 1-.448 1-1Z" />
  </svg>
));

Donate.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Donate.displayName = 'Donate';

export default Donate;
