import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const ArrowUpRightAndArrowDownLeftFromCenter = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M9.707 14.293a.999.999 0 0 1 0 1.414L3.414 22H8a1 1 0 1 1 0 2H3c-1.654 0-3-1.346-3-3v-5a1 1 0 1 1 2 0v4.586l6.293-6.293a.999.999 0 0 1 1.414 0ZM21 0h-5a1 1 0 1 0 0 2h4.586l-6.293 6.293a.999.999 0 1 0 1.414 1.414L22 3.414V8a1 1 0 1 0 2 0V3c0-1.654-1.346-3-3-3Z" />
    </svg>
  );
});

ArrowUpRightAndArrowDownLeftFromCenter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowUpRightAndArrowDownLeftFromCenter.displayName = 'ArrowUpRightAndArrowDownLeftFromCenter';

export default ArrowUpRightAndArrowDownLeftFromCenter;
