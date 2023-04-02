import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const ArrowSquareLeft = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M24 19V5a5.006 5.006 0 0 0-5-5H5a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5ZM5 22a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3Zm5.879-4.293a1 1 0 0 0 0-1.414L7.587 13 18 12.993a1 1 0 0 0 0-2L7.586 11l3.293-3.293A1 1 0 1 0 9.49 6.269l-.025.024-3.586 3.585a3 3 0 0 0 0 4.243l3.586 3.586a1 1 0 0 0 1.414 0Z" />
    </svg>
  );
});

ArrowSquareLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowSquareLeft.displayName = 'ArrowSquareLeft';

export default ArrowSquareLeft;
