import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Diploma = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M11 12a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2zm6-3a1 1 0 0 0-1-1H8a1 1 0 0 0 0 2h8a1 1 0 0 0 1-1zM8 6h8a1 1 0 0 0 0-2H8a1 1 0 0 0 0 2zm12 13.444v3.833a.721.721 0 0 1-1.231.51L18 23.019l-.769.768a.721.721 0 0 1-1.231-.51v-3.833A3.987 3.987 0 0 1 18 12a3.939 3.939 0 0 1 1 .142V5a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h5a1 1 0 0 1 0 2H8a5.006 5.006 0 0 1-5-5V5a5.006 5.006 0 0 1 5-5h8a5.006 5.006 0 0 1 5 5v8.382a3.95 3.95 0 0 1-1 6.062zM20 16a2 2 0 1 0-2 2 2 2 0 0 0 2-2z" />
  </svg>
));

Diploma.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Diploma.displayName = 'Diploma';

export default Diploma;
