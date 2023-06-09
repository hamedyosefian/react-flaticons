import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const DataTransfer = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M8 0H4a4 4 0 0 0-4 4v1a4 4 0 0 0 4 4h1v2H3a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2H7V9h1a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4zm2 5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2zm10 6h-2a4 4 0 0 0-4 4v5a4 4 0 0 0 4 4h2a4 4 0 0 0 4-4v-5a4 4 0 0 0-4-4zm2 9a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2zM14 4a1 1 0 0 1 1-1h2a3 3 0 0 1 3 3v2a1 1 0 0 1-2 0V6a1 1 0 0 0-1-1h-2a1 1 0 0 1-1-1zm-2 16a1 1 0 0 1-1 1H8a3 3 0 0 1-3-3v-2a1 1 0 0 1 2 0v2a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1zm8 0a1 1 0 1 1-1-1 1 1 0 0 1 1 1z" />
    </svg>
  );
});

DataTransfer.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

DataTransfer.displayName = 'DataTransfer';

export default DataTransfer;
