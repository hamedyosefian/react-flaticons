import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const TimeHalfPast = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M11 13.723a1.984 1.984 0 0 1 0-3.446V7a1 1 0 0 1 2 0v3.277a1.984 1.984 0 0 1 0 3.446V16a1 1 0 0 1-2 0zM12 0a1 1 0 0 0 0 2 10 10 0 0 1 0 20 1 1 0 0 0 0 2 12 12 0 0 0 0-24zM1.827 6.784a1 1 0 1 0 1 1 1 1 0 0 0-1-1zM2 12a1 1 0 1 0-1 1 1 1 0 0 0 1-1zm2.221-8.793a1 1 0 1 0 1 1 1 1 0 0 0-1-1zM7.779.841a1 1 0 1 0 1 1 1 1 0 0 0-1-1zM1.827 15.216a1 1 0 1 0 1 1 1 1 0 0 0-1-1zm2.394 3.577a1 1 0 1 0 1 1 1 1 0 0 0-1-1zm3.558 2.366a1 1 0 1 0 1 1 1 1 0 0 0-1-1z" />
    </svg>
  );
});

TimeHalfPast.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TimeHalfPast.displayName = 'TimeHalfPast';

export default TimeHalfPast;
