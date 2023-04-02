import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Expand = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M19 24h-2a1 1 0 0 1 0-2h2a3 3 0 0 0 3-3v-2a1 1 0 0 1 2 0v2a5.006 5.006 0 0 1-5 5ZM1 8a1 1 0 0 1-1-1V5a5.006 5.006 0 0 1 5-5h2a1 1 0 0 1 0 2H5a3 3 0 0 0-3 3v2a1 1 0 0 1-1 1ZM7 24H5a5.006 5.006 0 0 1-5-5v-2a1 1 0 0 1 2 0v2a3 3 0 0 0 3 3h2a1 1 0 0 1 0 2ZM23 8a1 1 0 0 1-1-1V5a3 3 0 0 0-3-3h-2a1 1 0 0 1 0-2h2a5.006 5.006 0 0 1 5 5v2a1 1 0 0 1-1 1Z" />
    </svg>
  );
});

Expand.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Expand.displayName = 'Expand';

export default Expand;
