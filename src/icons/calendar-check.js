import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CalendarCheck = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M19 2h-1V1a1 1 0 1 0-2 0v1H8V1a1 1 0 1 0-2 0v1H5C2.243 2 0 4.243 0 7v12c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5ZM5 4h14c1.654 0 3 1.346 3 3v1H2V7c0-1.654 1.346-3 3-3Zm14 18H5c-1.654 0-3-1.346-3-3v-9h20v9c0 1.654-1.346 3-3 3Zm-1.168-8.848a1 1 0 0 1-.025 1.414l-4.74 4.568c-.553.553-1.307.866-2.108.866s-1.555-.312-2.121-.879l-2.252-2.092a1 1 0 0 1 1.361-1.465l2.278 2.117c.433.43 1.063.402 1.439.026l4.754-4.582a1 1 0 0 1 1.414.026Z" />
    </svg>
  );
});

CalendarCheck.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CalendarCheck.displayName = 'CalendarCheck';

export default CalendarCheck;
