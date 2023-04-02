import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Tired = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M16.789 17.976A15.4 15.4 0 0 0 12 17a15.4 15.4 0 0 0-4.793.976 1 1 0 0 1-1.052-1.518A6.836 6.836 0 0 1 12 13a6.827 6.827 0 0 1 5.842 3.458 1 1 0 0 1-1.053 1.518ZM24 12A12.013 12.013 0 0 0 12 0C-3.9.6-3.893 23.4 12 24a12.013 12.013 0 0 0 12-12Zm-2 0a10.011 10.011 0 0 1-10 10C-1.249 21.5-1.244 2.5 12 2a10.011 10.011 0 0 1 10 10Zm-4.168-.445a1 1 0 0 0-.277-1.387L15.8 9l1.752-1.168a1 1 0 0 0-1.11-1.664l-3 2a1.007 1.007 0 0 0 0 1.664l3 2a1 1 0 0 0 1.387-.277Zm-10.277.277 3-2a1.007 1.007 0 0 0 0-1.664l-3-2a1 1 0 0 0-1.11 1.664L8.2 9l-1.755 1.168a1 1 0 0 0 1.11 1.664Z" />
    </svg>
  );
});

Tired.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Tired.displayName = 'Tired';

export default Tired;
