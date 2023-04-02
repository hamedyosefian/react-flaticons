import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const ArrowFromBottom = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M18 22h-5V2.823l4.3 4.3a1 1 0 0 0 1.414-1.414L13.768.763a2.5 2.5 0 0 0-3.536 0l-4.95 4.95A1 1 0 0 0 6.7 7.127l4.3-4.3V22H6a1 1 0 0 0 0 2h12a1 1 0 0 0 0-2Z" />
    </svg>
  );
});

ArrowFromBottom.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowFromBottom.displayName = 'ArrowFromBottom';

export default ArrowFromBottom;
