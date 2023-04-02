import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const ChessRookAlt = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M19 18V8.829A3.006 3.006 0 0 0 21 6V3a3 3 0 0 0-3-3h-1a2.987 2.987 0 0 0-2 .766A2.987 2.987 0 0 0 13 0h-2a2.987 2.987 0 0 0-2 .766A2.987 2.987 0 0 0 7 0H6a3 3 0 0 0-3 3v3a3.006 3.006 0 0 0 2 2.829V18a3 3 0 0 0 0 6h14a3 3 0 0 0 0-6ZM6 7a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 0 2 0V3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1a1 1 0 0 0 2 0V3a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1 1 1 0 0 0-1 1v10H7V8a1 1 0 0 0-1-1Zm13 15H5a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2Zm-9-10v-2a2 2 0 0 1 4 0v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1Z" />
    </svg>
  );
});

ChessRookAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ChessRookAlt.displayName = 'ChessRookAlt';

export default ChessRookAlt;
