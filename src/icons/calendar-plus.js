import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const CalendarPlus = forwardRef(({ color, size, ...rest }, ref) => {
  const iconContext = useContext(IconContext);

  const mergedProps = {
    color: color ?? iconContext.color ?? 'currentColor',
    size: size ?? iconContext.size ?? '20px',
    ...rest,
  };
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={mergedProps.size}
      height={mergedProps.size}
      viewBox="0 0 24 24"
      fill={mergedProps.color}
      {...mergedProps}
    >
      <path d="M19 2h-1V1a1 1 0 0 0-2 0v1H8V1a1 1 0 0 0-2 0v1H5C2.243 2 0 4.243 0 7v12c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5ZM5 4h14c1.654 0 3 1.346 3 3v1H2V7c0-1.654 1.346-3 3-3Zm14 18H5c-1.654 0-3-1.346-3-3v-9h20v9c0 1.654-1.346 3-3 3Zm-3-6a1 1 0 0 1-1 1h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2v-2a1 1 0 0 1 2 0v2h2a1 1 0 0 1 1 1Z" />
    </svg>
  );
});

CalendarPlus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CalendarPlus.displayName = 'CalendarPlus';

export default CalendarPlus;
