import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const SquareTerminal = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M5.374 18.455a.999.999 0 0 1-.707-1.707l4.041-4.041a1 1 0 0 0 0-1.414L4.667 7.252a.999.999 0 1 1 1.414-1.414l4.041 4.041a3.002 3.002 0 0 1 0 4.242l-4.041 4.041a.997.997 0 0 1-.707.293ZM24 19V5c0-2.757-2.243-5-5-5H5C2.243 0 0 2.243 0 5v14c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5ZM19 2c1.654 0 3 1.346 3 3v14c0 1.654-1.346 3-3 3H5c-1.654 0-3-1.346-3-3V5c0-1.654 1.346-3 3-3h14Zm1 15a1 1 0 0 0-1-1h-7a1 1 0 1 0 0 2h7a1 1 0 0 0 1-1Z" />
    </svg>
  );
});

SquareTerminal.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SquareTerminal.displayName = 'SquareTerminal';

export default SquareTerminal;
