import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const ChevronDoubleDown = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M.305 12.293a1 1 0 0 1 1.414 0l8.172 8.171a3 3 0 0 0 4.242 0l8.172-8.171a1 1 0 0 1 1.414 1.414l-8.172 8.171a5 5 0 0 1-7.07 0L.305 13.707a1 1 0 0 1 0-1.414Z" />
      <path d="M.305 2.293a1 1 0 0 1 1.414 0l9.586 9.586a1 1 0 0 0 1.414 0l9.586-9.586a1 1 0 0 1 1.414 1.414l-9.586 9.586a3 3 0 0 1-4.242 0L.305 3.707a1 1 0 0 1 0-1.414Z" />
    </svg>
  );
});

ChevronDoubleDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ChevronDoubleDown.displayName = 'ChevronDoubleDown';

export default ChevronDoubleDown;
