import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Hamburger = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M24 14.006a2.981 2.981 0 0 0-1-2.219V10A10.011 10.011 0 0 0 13 0h-2A10.011 10.011 0 0 0 1 10v1.837A3.137 3.137 0 0 0 1 16.4v.6a7.008 7.008 0 0 0 7 7h8a7.008 7.008 0 0 0 7-7v-.774a2.981 2.981 0 0 0 1-2.22ZM2.812 15.158a1.1 1.1 0 0 1 .282-2.152H21a1 1 0 0 1 0 2h-4c-1.956 0-3.979.788-6.364 2.481a2.867 2.867 0 0 1-3.271 0c-.228-.162-.447-.331-.667-.5a7.5 7.5 0 0 0-3.886-1.829ZM3 10a8.009 8.009 0 0 1 8-8h2a8.009 8.009 0 0 1 8 8v1.006l-18 .01Zm13 12H8a4.994 4.994 0 0 1-4.975-4.755 6.24 6.24 0 0 1 2.454 1.327c.239.185.479.369.729.546a4.893 4.893 0 0 0 5.584 0A9.385 9.385 0 0 1 17 17.006h4A5 5 0 0 1 16 22ZM9 5a1 1 0 0 1 2 0 1 1 0 0 1-2 0ZM6 8a1 1 0 0 1 2 0 1 1 0 0 1-2 0Z" />
  </svg>
));

Hamburger.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Hamburger.displayName = 'Hamburger';

export default Hamburger;
