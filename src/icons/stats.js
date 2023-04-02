import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Stats = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M23 22H3a1 1 0 0 1-1-1V1a1 1 0 0 0-2 0v20a3 3 0 0 0 3 3h20a1 1 0 0 0 0-2Z" />
      <path d="M15 20a1 1 0 0 0 1-1v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 1 1ZM7 20a1 1 0 0 0 1-1v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 1 1ZM19 20a1 1 0 0 0 1-1V7a1 1 0 0 0-2 0v12a1 1 0 0 0 1 1ZM11 20a1 1 0 0 0 1-1V7a1 1 0 0 0-2 0v12a1 1 0 0 0 1 1Z" />
    </svg>
  );
});

Stats.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Stats.displayName = 'Stats';

export default Stats;
