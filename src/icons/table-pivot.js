import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const TablePivot = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M24 16v1c0 2.757-2.243 5-5 5h-1a1 1 0 1 1 0-2h1c1.654 0 3-1.346 3-3v-1a1 1 0 1 1 2 0Zm0-9v2a1 1 0 1 1-2 0H7v11h4a1 1 0 1 1 0 2H5c-2.757 0-5-2.243-5-5V7c0-2.757 2.243-5 5-5h14c2.757 0 5 2.243 5 5ZM2 7h3V4C3.346 4 2 5.346 2 7Zm3 2H2v8c0 1.654 1.346 3 3 3V9Zm17-2c0-1.654-1.346-3-3-3H7v3h15Zm-7.127 11H17c1.654 0 3-1.346 3-3v-2.127l.293.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414l-1.075-1.076c-.871-.871-2.391-.871-3.263 0l-1.076 1.076a.999.999 0 1 0 1.414 1.414l.293-.293V15c0 .552-.449 1-1 1h-2.127l.293-.293a.999.999 0 1 0-1.414-1.414l-1.075 1.076c-.436.435-.676 1.015-.676 1.631s.24 1.196.676 1.631l1.076 1.076a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L14.874 18Z" />
    </svg>
  );
});

TablePivot.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TablePivot.displayName = 'TablePivot';

export default TablePivot;
