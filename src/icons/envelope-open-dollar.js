import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const EnvelopeOpenDollar = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M22.459 9.097 21 7.699V4c0-2.206-1.794-4-4-4H7C4.794 0 3 1.794 3 4v3.699L1.541 9.097A5.025 5.025 0 0 0 0 12.708V19c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5v-6.292a5.026 5.026 0 0 0-1.541-3.611ZM7 2h10c1.103 0 2 .897 2 2v8.243l-4.878 4.879a3.007 3.007 0 0 1-4.243 0l-4.878-4.879V4c0-1.103.897-2 2-2Zm15 17c0 1.654-1.346 3-3 3H5c-1.654 0-3-1.346-3-3v-6.292c0-.195.02-.389.058-.579l6.407 6.407c.975.975 2.255 1.462 3.536 1.462s2.561-.487 3.536-1.462l6.407-6.407c.038.19.058.384.058.579V19Zm-8-8a.768.768 0 0 0-.644-.76l-3.042-.507A2.762 2.762 0 0 1 7.999 7c0-1.654 1.346-3 3-3a1 1 0 0 1 2 0h.268c1.067 0 2.063.575 2.598 1.5a1 1 0 0 1-1.731 1.001 1.004 1.004 0 0 0-.867-.5h-2.268c-.551 0-1 .449-1 1 0 .378.271.698.644.76l3.042.507A2.762 2.762 0 0 1 16 11.001c0 1.654-1.346 3-3 3a1 1 0 0 1-2 0h-.268a3.01 3.01 0 0 1-2.598-1.499 1 1 0 0 1 1.731-1.001c.178.308.511.5.867.5H13c.551 0 1-.449 1-1Z" />
  </svg>
));

EnvelopeOpenDollar.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

EnvelopeOpenDollar.displayName = 'EnvelopeOpenDollar';

export default EnvelopeOpenDollar;
