import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CalendarPen = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M19 2h-1V1a1 1 0 1 0-2 0v1H8V1a1 1 0 1 0-2 0v1H5C2.243 2 0 4.243 0 7v12c0 2.757 2.243 5 5 5h4a1 1 0 1 0 0-2H5c-1.654 0-3-1.346-3-3v-9h21a1 1 0 0 0 1-1V7c0-2.757-2.243-5-5-5Zm3 6H2V7c0-1.654 1.346-3 3-3h14c1.654 0 3 1.346 3 3v1Zm-3.121 4.879-5.707 5.707A3.971 3.971 0 0 0 12 21.414V23a1 1 0 0 0 1 1h1.586a3.975 3.975 0 0 0 2.828-1.172l5.707-5.707c.566-.567.879-1.32.879-2.122s-.313-1.555-.879-2.121a3.002 3.002 0 0 0-4.242 0Zm2.828 2.828L16 21.414c-.378.378-.88.586-1.414.586H14v-.586c0-.526.214-1.042.586-1.414l5.707-5.707a1 1 0 0 1 1.414 1.414Z" />
  </svg>
));

CalendarPen.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CalendarPen.displayName = 'CalendarPen';

export default CalendarPen;
