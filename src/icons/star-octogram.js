import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const StarOctogram = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M21.77 8.948a1.238 1.238 0 0 1-.7-1.7 3.239 3.239 0 0 0-4.315-4.316 1.239 1.239 0 0 1-1.7-.7 3.239 3.239 0 0 0-6.1 0 1.238 1.238 0 0 1-1.7.7 3.239 3.239 0 0 0-4.321 4.317 1.237 1.237 0 0 1-.7 1.7 3.24 3.24 0 0 0 0 6.1 1.238 1.238 0 0 1 .705 1.7 3.238 3.238 0 0 0 4.311 4.317 1.238 1.238 0 0 1 1.7.7 3.239 3.239 0 0 0 6.1 0 1.238 1.238 0 0 1 1.7-.7 3.239 3.239 0 0 0 4.316-4.315 1.239 1.239 0 0 1 .7-1.7 3.239 3.239 0 0 0 0-6.1Zm-.67 4.219a3.239 3.239 0 0 0-1.84 4.442 1.239 1.239 0 0 1-1.652 1.651 3.238 3.238 0 0 0-4.441 1.84 1.238 1.238 0 0 1-2.334 0 3.24 3.24 0 0 0-4.442-1.84 1.239 1.239 0 0 1-1.65-1.652A3.238 3.238 0 0 0 2.9 13.167a1.239 1.239 0 0 1 0-2.334 3.237 3.237 0 0 0 1.84-4.442A1.239 1.239 0 0 1 6.391 4.74a3.239 3.239 0 0 0 4.442-1.84 1.238 1.238 0 0 1 2.334 0 3.239 3.239 0 0 0 4.442 1.84 1.239 1.239 0 0 1 1.651 1.652 3.238 3.238 0 0 0 1.84 4.441 1.238 1.238 0 0 1 0 2.334Z" />
    </svg>
  );
});

StarOctogram.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

StarOctogram.displayName = 'StarOctogram';

export default StarOctogram;
