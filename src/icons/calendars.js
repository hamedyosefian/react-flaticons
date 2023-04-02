import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Calendars = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M19 2V1a1 1 0 1 0-2 0v1h-6V1a1 1 0 1 0-2 0v1C6.243 2 4 4.243 4 7v8c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5Zm3 13c0 1.654-1.346 3-3 3H9c-1.654 0-3-1.346-3-3V9h16v6ZM6 7c0-1.654 1.346-3 3-3h10c1.654 0 3 1.346 3 3H6Zm14 16a1 1 0 0 1-1 1H5c-2.757 0-5-2.243-5-5V8a1 1 0 1 1 2 0v11c0 1.654 1.346 3 3 3h14a1 1 0 0 1 1 1Z" />
    </svg>
  );
});

Calendars.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Calendars.displayName = 'Calendars';

export default Calendars;
