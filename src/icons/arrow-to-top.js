import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const ArrowToTop = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M6 2.031h4.517a2.492 2.492 0 0 0-.285.232l-4.95 4.95A1 1 0 0 0 6.7 8.627l4.3-4.3V23a1 1 0 0 0 2 0V4.324l4.3 4.3a1 1 0 0 0 1.414-1.414l-4.95-4.95a2.492 2.492 0 0 0-.285-.232H18a1 1 0 0 0 0-2H6a1 1 0 0 0 0 2Z" />
    </svg>
  );
});

ArrowToTop.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowToTop.displayName = 'ArrowToTop';

export default ArrowToTop;
