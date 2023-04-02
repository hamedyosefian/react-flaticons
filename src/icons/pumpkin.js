import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Pumpkin = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M17 6a4.074 4.074 0 0 0-1.639.362A4.96 4.96 0 0 0 13.049 6c.426-4.382 3.878-4.779 3.951-3a1 1 0 0 0 0 2 2 2 0 0 0 2-2c-.3-3.828-5.018-3.987-6.99-.437-.582-1.045-2.8-3.664-3.9-2.01A1 1 0 0 0 8.553 1.9c1.425.712 2.214 2.062 2.4 4.105a4.976 4.976 0 0 0-2.316.362C4.373 4.824.035 8.846 0 15c.045 6.1 4.272 10.1 8.464 8.666a3.365 3.365 0 0 0 2.525.152 2.873 2.873 0 0 0 2.022 0 3.36 3.36 0 0 0 2.523-.152C19.726 25.1 23.955 21.1 24 15c0-5.634-3.56-9-7-9ZM2 15c0-4.027 2.148-6.558 4.4-6.943-3.1 3.03-3.107 10.757-.182 13.85C4.033 21.42 2 18.918 2 15Zm4 0c0-3.446 1.569-5.66 2.984-6.552-1.343 2.617-1.257 10.983.048 13.287C7.553 20.964 6 18.541 6 15Zm6 7c-2.671.2-2.629-14.178 0-14 2.634-.17 2.666 14.2 0 14Zm2.968-.265c1.3-2.306 1.391-10.669.048-13.287 3.986 2.276 3.876 11.119-.048 13.287m2.811.172c2.926-3.094 2.913-10.821-.182-13.85 5.746.978 5.849 12.619.182 13.85Z" />
    </svg>
  );
});

Pumpkin.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Pumpkin.displayName = 'Pumpkin';

export default Pumpkin;
