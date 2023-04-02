import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const ArrowCircleDown = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0Zm0 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1-10 10Zm5.707-8.879a1 1 0 0 0-1.414 0L13 16.413 12.993 6a1 1 0 0 0-2 0L11 16.414l-3.293-3.293a1 1 0 1 0-1.438 1.389l.024.025 3.585 3.586a3 3 0 0 0 4.243 0l3.586-3.586a1 1 0 0 0 0-1.414Z" />
    </svg>
  );
});

ArrowCircleDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowCircleDown.displayName = 'ArrowCircleDown';

export default ArrowCircleDown;
