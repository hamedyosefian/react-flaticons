import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const SensorAlert = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M21.998 24H19a1 1 0 1 1 0-2h2.998l-5.991-10.005L9.996 22.01 13 22a1 1 0 1 1 0 2h-2.999a1.978 1.978 0 0 1-1.734-1.004 1.98 1.98 0 0 1 .006-2.004l6.003-10.025c.358-.612 1.004-.982 1.723-.982s1.364.371 1.728.992l5.992 10.006c.372.636.374 1.385.013 2.014s-1.01 1.004-1.734 1.004ZM17 20v-3a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0ZM6 23a1 1 0 0 0-1-1c-1.654 0-3-1.346-3-3V5c0-1.654 1.346-3 3-3h14c1.654 0 3 1.346 3 3v9a1 1 0 1 0 2 0V5c0-2.757-2.243-5-5-5H5C2.243 0 0 2.243 0 5v14c0 2.757 2.243 5 5 5a1 1 0 0 0 1-1ZM5 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm4 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm7 18a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" />
    </svg>
  );
});

SensorAlert.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SensorAlert.displayName = 'SensorAlert';

export default SensorAlert;
