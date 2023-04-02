import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const ChessPawnAlt = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M19.052 18H19c-1.988 0-4-3.435-4-10h1a1 1 0 0 0 0-2h-.537a4 4 0 1 0-6.926 0H8a1 1 0 0 0 0 2h1c0 6.565-2.012 10-4 10h-.052A3 3 0 0 0 5 24h14a3 3 0 0 0 .052-6ZM12 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2Zm-1 6h2c0 4.464.883 7.96 2.4 10H8.6c1.517-2.04 2.4-5.536 2.4-10Zm8 14H5a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2Z" />
    </svg>
  );
});

ChessPawnAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ChessPawnAlt.displayName = 'ChessPawnAlt';

export default ChessPawnAlt;
