import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const ArrowToBottom = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M18 22h-4.517a2.492 2.492 0 0 0 .285-.232l4.95-4.95A1 1 0 0 0 17.3 15.4L13 19.7V1.031a1 1 0 0 0-2 0v18.676L6.7 15.4a1 1 0 0 0-1.414 1.414l4.95 4.95a2.492 2.492 0 0 0 .285.232H6a1 1 0 0 0 0 2h12a1 1 0 0 0 0-2Z" />
    </svg>
  );
});

ArrowToBottom.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowToBottom.displayName = 'ArrowToBottom';

export default ArrowToBottom;
