import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Compress = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M7 0a1 1 0 0 0-1 1v2a3 3 0 0 1-3 3H1a1 1 0 0 0 0 2h2a5.006 5.006 0 0 0 5-5V1a1 1 0 0 0-1-1ZM23 16h-2a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 2 0v-2a3 3 0 0 1 3-3h2a1 1 0 0 0 0-2ZM21 8h2a1 1 0 0 0 0-2h-2a3 3 0 0 1-3-3V1a1 1 0 0 0-2 0v2a5.006 5.006 0 0 0 5 5ZM3 16H1a1 1 0 0 0 0 2h2a3 3 0 0 1 3 3v2a1 1 0 0 0 2 0v-2a5.006 5.006 0 0 0-5-5Z" />
    </svg>
  );
});

Compress.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Compress.displayName = 'Compress';

export default Compress;
