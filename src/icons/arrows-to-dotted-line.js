import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const ArrowsToDottedLine = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M10 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm-8 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm11 1a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm-7-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm12 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm4 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM10.586 8.414c.39.39.902.585 1.414.585s1.024-.195 1.414-.585l3.293-3.293a.999.999 0 1 0-1.414-1.414L13 6V1a1 1 0 1 0-2 0v5L8.707 3.707a.999.999 0 1 0-1.414 1.414l3.293 3.293Zm2.828 7.172a2.003 2.003 0 0 0-2.828 0l-3.293 3.293a.999.999 0 1 0 1.414 1.414L11 18v5a1 1 0 1 0 2 0v-5l2.293 2.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414l-3.293-3.293Z" />
    </svg>
  );
});

ArrowsToDottedLine.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowsToDottedLine.displayName = 'ArrowsToDottedLine';

export default ArrowsToDottedLine;
