import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const MaskCarnival = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M22.514 10.972a3.825 3.825 0 0 0-3.028-.944 35.867 35.867 0 0 0-6.447 1.39C13.359 8.913 15.75 8 18 8a3 3 0 0 0 0-6 6.973 6.973 0 0 0-5 2.111V1a1 1 0 0 0-2 0v3.11A6.977 6.977 0 0 0 6 2a3 3 0 0 0 0 6c2.25 0 4.641.913 4.961 3.418a35.887 35.887 0 0 0-6.447-1.39 3.831 3.831 0 0 0-3.028.944 4.528 4.528 0 0 0-1.469 3.4C.017 23.062 4.852 24 6.931 24a5.38 5.38 0 0 0 3.09-1.185A3.667 3.667 0 0 1 12 21.967a3.667 3.667 0 0 1 1.979.848A5.383 5.383 0 0 0 17.069 24c2.079 0 6.914-.938 6.914-9.625a4.532 4.532 0 0 0-1.469-3.403ZM18 4a1 1 0 0 1 0 2 7.9 7.9 0 0 0-4.732 1.386A5.006 5.006 0 0 1 18 4ZM6 6a1 1 0 0 1 0-2 5.009 5.009 0 0 1 4.733 3.386A7.9 7.9 0 0 0 6 6Zm11.069 16a3.667 3.667 0 0 1-1.979-.848A5.387 5.387 0 0 0 12 19.967a5.387 5.387 0 0 0-3.09 1.185A3.667 3.667 0 0 1 6.931 22c-3.169 0-4.914-2.708-4.914-7.625a2.565 2.565 0 0 1 .8-1.907 1.8 1.8 0 0 1 1.462-.453 32.493 32.493 0 0 1 7.352 1.75 1 1 0 0 0 .744 0 32.308 32.308 0 0 1 7.352-1.75 1.807 1.807 0 0 1 1.462.453 2.561 2.561 0 0 1 .8 1.907C21.983 19.292 20.238 22 17.069 22Z" />
      <path d="M17.83 15.023C15.309 15.6 12 16.648 12 16.648c2.009.213 4.056 2.051 5.114 2.345 1.109.308 1.527-.844 1.867-2.725a1.02 1.02 0 0 0-1.151-1.245ZM5.019 16.268c.34 1.881.758 3.033 1.867 2.725 1.058-.294 3.1-2.132 5.114-2.345 0 0-3.309-1.052-5.83-1.625a1.02 1.02 0 0 0-1.151 1.245Z" />
    </svg>
  );
});

MaskCarnival.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MaskCarnival.displayName = 'MaskCarnival';

export default MaskCarnival;
