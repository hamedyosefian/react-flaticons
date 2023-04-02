import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const ArrowTrendDown = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M23 8a1 1 0 0 0-1 1v5.586l-6.563-6.562a3.451 3.451 0 0 0-4.875 0l-2.577 2.577a1.396 1.396 0 0 1-1.971 0L1.707 6.293A.999.999 0 1 0 .293 7.707l4.308 4.308a3.4 3.4 0 0 0 4.799 0l2.577-2.577a1.45 1.45 0 0 1 2.047 0L20.586 16H15a1 1 0 1 0 0 2h6c1.654 0 3-1.346 3-3V9a1 1 0 0 0-1-1Z" />
    </svg>
  );
});

ArrowTrendDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowTrendDown.displayName = 'ArrowTrendDown';

export default ArrowTrendDown;
