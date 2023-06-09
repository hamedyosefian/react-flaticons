import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const ToolCrop = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M23 18h-3V9a5.006 5.006 0 0 0-5-5H6V1a1 1 0 0 0-2 0v3H1a1 1 0 0 0 0 2h3v9a5.006 5.006 0 0 0 5 5h9v3a1 1 0 0 0 2 0v-3h3a1 1 0 0 0 0-2ZM9 18a3 3 0 0 1-3-3V6h9a3 3 0 0 1 3 3v9Z" />
    </svg>
  );
});

ToolCrop.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ToolCrop.displayName = 'ToolCrop';

export default ToolCrop;
