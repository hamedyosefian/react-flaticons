import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const ArrowUpRight = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M20 0h-9a1 1 0 1 0 0 2h9c.179 0 .352.024.518.068L.293 22.293a.999.999 0 1 0 1.414 1.414L21.932 3.482c.044.165.068.339.068.518v9a1 1 0 1 0 2 0V4c0-2.206-1.794-4-4-4Z" />
    </svg>
  );
});

ArrowUpRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowUpRight.displayName = 'ArrowUpRight';

export default ArrowUpRight;
