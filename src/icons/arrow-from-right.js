import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const ArrowFromRight = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M23 5a1 1 0 0 0-1 1v5H2.579l4.293-4.293a1 1 0 0 0-1.414-1.414L.879 9.872a3 3 0 0 0 0 4.242l4.579 4.578a1 1 0 1 0 1.414-1.414L2.593 13H22v5a1 1 0 0 0 2 0V6a1 1 0 0 0-1-1Z" />
    </svg>
  );
});

ArrowFromRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowFromRight.displayName = 'ArrowFromRight';

export default ArrowFromRight;
