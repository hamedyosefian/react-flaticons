import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const ArrowUp = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M6 6.21a1 1 0 0 0 1.41 0L11 2.58V23a1 1 0 0 0 1 1 1 1 0 0 0 1-1V2.59l3.62 3.62a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.41L14.13.88a3 3 0 0 0-4.24 0L6 4.8a1 1 0 0 0 0 1.41Z" />
    </svg>
  );
});

ArrowUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowUp.displayName = 'ArrowUp';

export default ArrowUp;
