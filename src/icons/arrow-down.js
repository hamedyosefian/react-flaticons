import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const ArrowDown = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M18.05 17.79a1 1 0 0 0-1.42 0L13 21.42V1a1 1 0 0 0-1-1 1 1 0 0 0-1 1v20.41l-3.62-3.62A1 1 0 1 0 6 19.2l3.92 3.92a3 3 0 0 0 4.24 0l3.92-3.92a1 1 0 0 0-.03-1.41Z" />
    </svg>
  );
});

ArrowDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowDown.displayName = 'ArrowDown';

export default ArrowDown;
