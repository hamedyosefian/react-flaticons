import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const GasPump = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M23.681 3.267a1 1 0 0 0-1.414 0L19.293 6.24a1 1 0 0 0-.293.707V18a1 1 0 0 1-1 1h-2V5a5.006 5.006 0 0 0-5-5H5a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h6a5 5 0 0 0 4.576-3H18a3 3 0 0 0 3-3V7.361l2.681-2.68a1 1 0 0 0 0-1.414ZM5 2h6a3 3 0 0 1 3 3v4h-2a3.967 3.967 0 0 0-.985-2.6l.692-.693a1 1 0 1 0-1.414-1.414l-.954.954A3.962 3.962 0 0 0 4 9H2V5a3 3 0 0 1 3-3Zm1 7a2 2 0 0 1 4 0Zm5 13H5a3 3 0 0 1-3-3v-8h12v8a3 3 0 0 1-3 3Z" />
    </svg>
  );
});

GasPump.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

GasPump.displayName = 'GasPump';

export default GasPump;
