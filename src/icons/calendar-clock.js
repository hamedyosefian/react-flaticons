import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CalendarClock = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M17 10.039c-3.859 0-7 3.14-7 7C10 20.877 13.141 24 17 24s7-3.14 7-7c0-3.838-3.141-6.961-7-6.961ZM17 22c-2.757 0-5-2.226-5-4.961 0-2.757 2.243-5 5-5s5 2.226 5 4.961c0 2.757-2.243 5-5 5Zm1.707-4.707a.999.999 0 1 1-1.414 1.414l-1-1A1 1 0 0 1 16 17v-2a1 1 0 1 1 2 0v1.586l.707.707ZM24 7v2a1 1 0 1 1-2 0V7c0-1.654-1.346-3-3-3H5C3.346 4 2 5.346 2 7v1h9a1 1 0 0 1 0 2H2v9c0 1.654 1.346 3 3 3h4a1 1 0 0 1 0 2H5c-2.757 0-5-2.243-5-5V7c0-2.757 2.243-5 5-5h1V1a1 1 0 0 1 2 0v1h8V1a1 1 0 1 1 2 0v1h1c2.757 0 5 2.243 5 5Z" />
  </svg>
));

CalendarClock.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CalendarClock.displayName = 'CalendarClock';

export default CalendarClock;
