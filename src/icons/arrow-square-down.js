import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const ArrowSquareDown = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M19 0H5a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V5a5.006 5.006 0 0 0-5-5Zm3 19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3Zm-4.293-5.879a1 1 0 0 0-1.414 0L13 16.413 12.993 6a1 1 0 0 0-2 0L11 16.414l-3.293-3.293a1 1 0 1 0-1.438 1.389l.024.025 3.585 3.586a3 3 0 0 0 4.243 0l3.586-3.586a1 1 0 0 0 0-1.414Z" />
    </svg>
  );
});

ArrowSquareDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowSquareDown.displayName = 'ArrowSquareDown';

export default ArrowSquareDown;
