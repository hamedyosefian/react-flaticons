import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Bike = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M19.783 12.079a73.63 73.63 0 0 0-.555-1.873A23.043 23.043 0 0 1 18 5a1 1 0 0 1 2 0 1 1 0 0 0 2 0 3 3 0 0 0-6 0 10.641 10.641 0 0 0 .319 2.263L11.519 11 5.971 7H9a1 1 0 0 0 0-2H5.971a1.969 1.969 0 0 0-1.162 3.559l5.071 3.712-1.438 1.119a4.954 4.954 0 1 0 1.15 1.638l7.289-5.669c.141.476.727 2.384.856 2.823a4.994 4.994 0 1 0 2.046-.1ZM5 20a3 3 0 1 1 3-3 3 3 0 0 1-3 3Zm14 0a3 3 0 1 1 3-3 3 3 0 0 1-3 3Z" />
    </svg>
  );
});

Bike.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Bike.displayName = 'Bike';

export default Bike;
