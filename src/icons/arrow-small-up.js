import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const ArrowSmallUp = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="m17.71 9.88-4.3-4.29a2 2 0 0 0-2.82 0l-4.3 4.29a1 1 0 0 0 0 1.41 1 1 0 0 0 1.42 0L11 8v11a1 1 0 0 0 2 0V8l3.29 3.29a1 1 0 1 0 1.42-1.41Z" />
    </svg>
  );
});

ArrowSmallUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowSmallUp.displayName = 'ArrowSmallUp';

export default ArrowSmallUp;
