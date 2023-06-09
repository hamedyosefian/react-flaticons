import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const MarsDouble = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M22 6h-3a1 1 0 0 0 0 2h1.586l-3.4 3.4a6.946 6.946 0 0 0-3.253-1.333A6.946 6.946 0 0 0 12.6 6.816l3.4-3.4V5a1 1 0 0 0 2 0V2a2 2 0 0 0-2-2h-3a1 1 0 0 0 0 2h1.586l-3.4 3.4a6.993 6.993 0 1 0-5.117 12.531A7 7 0 1 0 18.6 12.816l3.4-3.4V11a1 1 0 0 0 2 0V8a2 2 0 0 0-2-2ZM2 11a5 5 0 1 1 5 5 5.006 5.006 0 0 1-5-5Zm11 11a5 5 0 0 1-4.908-4.094 7.005 7.005 0 0 0 5.814-5.814A4.995 4.995 0 0 1 13 22Z" />
    </svg>
  );
});

MarsDouble.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MarsDouble.displayName = 'MarsDouble';

export default MarsDouble;
