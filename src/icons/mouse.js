import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Mouse = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M13 3V1a1 1 0 0 0-2 0v2a7.008 7.008 0 0 0-7 7v6a8 8 0 0 0 16 0v-6a7.008 7.008 0 0 0-7-7Zm5 13a6 6 0 0 1-12 0v-6a5.006 5.006 0 0 1 5-5h2a5.006 5.006 0 0 1 5 5Z" />
      <path d="M12 7a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1Z" />
    </svg>
  );
});

Mouse.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Mouse.displayName = 'Mouse';

export default Mouse;
