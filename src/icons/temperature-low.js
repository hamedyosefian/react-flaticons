import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const TemperatureLow = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M11 24c-6.079.117-9.334-7.638-5-11.89V5c.211-6.609 9.791-6.6 10 0v7.11c4.335 4.253 1.077 12.007-5 11.89Zm0-22a3 3 0 0 0-3 3v7.537a1 1 0 0 1-.332.744A5.018 5.018 0 0 0 11 22a5.018 5.018 0 0 0 3.332-8.719 1 1 0 0 1-.332-.744V5a3 3 0 0 0-3-3Zm0 18a3.007 3.007 0 0 1-1-5.829V12a1 1 0 0 1 2 0v2.171A3.007 3.007 0 0 1 11 20Zm0-4a1 1 0 0 0 0 2 1 1 0 0 0 0-2ZM21 6a3 3 0 0 1 0-6 3 3 0 0 1 0 6Zm0-4a1 1 0 0 0 0 2 1 1 0 0 0 0-2Z" />
    </svg>
  );
});

TemperatureLow.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TemperatureLow.displayName = 'TemperatureLow';

export default TemperatureLow;
