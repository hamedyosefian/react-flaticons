import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const ChartHistogram = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M23 22H5a3 3 0 0 1-3-3V1a1 1 0 0 0-2 0v18a5.006 5.006 0 0 0 5 5h18a1 1 0 0 0 0-2Z" />
      <path d="M6 20a1 1 0 0 0 1-1v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 1 1ZM10 10v9a1 1 0 0 0 2 0v-9a1 1 0 0 0-2 0ZM15 13v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-2 0ZM20 9v10a1 1 0 0 0 2 0V9a1 1 0 0 0-2 0ZM6 9a1 1 0 0 0 .707-.293l3.586-3.586a1.025 1.025 0 0 1 1.414 0l2.172 2.172a3 3 0 0 0 4.242 0l5.586-5.586A1 1 0 0 0 22.293.293l-5.586 5.585a1 1 0 0 1-1.414 0l-2.172-2.171a3 3 0 0 0-4.242 0L5.293 7.293A1 1 0 0 0 6 9Z" />
    </svg>
  );
});

ChartHistogram.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ChartHistogram.displayName = 'ChartHistogram';

export default ChartHistogram;
