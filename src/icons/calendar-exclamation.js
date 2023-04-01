import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CalendarExclamation = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M19 2h-1V1a1 1 0 0 0-2 0v1H8V1a1 1 0 0 0-2 0v1H5C2.243 2 0 4.243 0 7v12c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5Zm0 20H5c-1.654 0-3-1.346-3-3v-9h6a1 1 0 0 0 0-2H2V7c0-1.654 1.346-3 3-3h14c1.654 0 3 1.346 3 3v1h-6a1 1 0 0 0 0 2h6v9c0 1.654-1.346 3-3 3ZM13 9v7a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0Zm0 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
    </svg>
  );
});

CalendarExclamation.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CalendarExclamation.displayName = 'CalendarExclamation';

export default CalendarExclamation;
