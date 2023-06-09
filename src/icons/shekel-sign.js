import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const ShekelSign = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M8 2H5a1 1 0 0 0-1 1v20a1 1 0 1 1-2 0V3c0-1.654 1.346-3 3-3h3c4.411 0 8 3.589 8 8v9a1 1 0 1 1-2 0V8c0-3.309-2.691-6-6-6Zm13-2a1 1 0 0 0-1 1v15c0 3.309-2.691 6-6 6h-3a1 1 0 0 1-1-1V7a1 1 0 1 0-2 0v14c0 1.654 1.346 3 3 3h3c4.411 0 8-3.589 8-8V1a1 1 0 0 0-1-1Z" />
    </svg>
  );
});

ShekelSign.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ShekelSign.displayName = 'ShekelSign';

export default ShekelSign;
