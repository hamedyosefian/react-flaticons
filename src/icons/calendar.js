import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Calendar = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M19 2h-1V1a1 1 0 0 0-2 0v1H8V1a1 1 0 0 0-2 0v1H5a5.006 5.006 0 0 0-5 5v12a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V7a5.006 5.006 0 0 0-5-5ZM2 7a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v1H2Zm17 15H5a3 3 0 0 1-3-3v-9h20v9a3 3 0 0 1-3 3Z" />
    <circle cx="12" cy="15" r="1.5" />
    <circle cx="7" cy="15" r="1.5" />
    <circle cx="17" cy="15" r="1.5" />
  </svg>
));

Calendar.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Calendar.displayName = 'Calendar';

export default Calendar;
