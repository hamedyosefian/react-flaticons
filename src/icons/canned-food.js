import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const CannedFood = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M23 22V8a1 1 0 0 0 0-2h-4.556A4.007 4.007 0 0 0 15 0a1 1 0 0 0 0 2 2 2 0 0 1 0 4H1a1 1 0 0 0 0 2v14a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2ZM3 20h15a1 1 0 0 0 0-2H3v-6h15a1 1 0 0 0 0-2H3V8h18v14H3Z" />
    </svg>
  );
});

CannedFood.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CannedFood.displayName = 'CannedFood';

export default CannedFood;
