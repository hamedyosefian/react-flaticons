import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Box = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M9 14h6a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2Z" />
      <path d="M19 0H5a5.006 5.006 0 0 0-5 5v1a3 3 0 0 0 1 2.234V19a5.006 5.006 0 0 0 5 5h12a5.006 5.006 0 0 0 5-5V8.234A3 3 0 0 0 24 6V5a5.006 5.006 0 0 0-5-5ZM2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1Zm19 14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V9h18Z" />
    </svg>
  );
});

Box.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Box.displayName = 'Box';

export default Box;
