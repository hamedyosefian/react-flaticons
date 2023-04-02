import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const AngleDoubleSmallLeft = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M10.48 19a1 1 0 0 1-.7-.29l-4.59-4.59a3 3 0 0 1 0-4.24l4.59-4.59a1 1 0 0 1 1.41 0 1 1 0 0 1 0 1.42L6.6 11.29a1 1 0 0 0 0 1.42l4.59 4.58a1 1 0 0 1 0 1.42 1 1 0 0 1-.71.29Z" />
      <path d="M17.48 19a1 1 0 0 1-.7-.29l-6-6a1 1 0 0 1 0-1.42l6-6a1 1 0 0 1 1.41 0 1 1 0 0 1 0 1.42L12.9 12l5.29 5.29a1 1 0 0 1 0 1.42 1 1 0 0 1-.71.29Z" />
    </svg>
  );
});

AngleDoubleSmallLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

AngleDoubleSmallLeft.displayName = 'AngleDoubleSmallLeft';

export default AngleDoubleSmallLeft;
