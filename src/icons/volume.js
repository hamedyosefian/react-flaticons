import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Volume = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M20.807 4.29a1 1 0 0 0-1.415 1.415 8.913 8.913 0 0 1 0 12.59 1 1 0 0 0 1.415 1.415 10.916 10.916 0 0 0 0-15.42Z" />
      <path d="M18.1 7.291a1 1 0 0 0-1.42 1.415 4.662 4.662 0 0 1 0 6.588 1 1 0 0 0 1.42 1.415 6.666 6.666 0 0 0 0-9.418ZM13.82.2A12.054 12.054 0 0 0 6.266 5H5a5.008 5.008 0 0 0-5 5v4a5.008 5.008 0 0 0 5 5h1.266a12.059 12.059 0 0 0 7.554 4.8.917.917 0 0 0 .181.017 1 1 0 0 0 1-1V1.186A1 1 0 0 0 13.82.2ZM13 21.535a10.083 10.083 0 0 1-5.371-4.08A1 1 0 0 0 6.792 17H5a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h1.8a1 1 0 0 0 .837-.453A10.079 10.079 0 0 1 13 2.465Z" />
    </svg>
  );
});

Volume.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Volume.displayName = 'Volume';

export default Volume;
