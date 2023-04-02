import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const ThunderstormMoon = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M15 24a1 1 0 0 1-.849-1.527L15.684 20h-2.069a1.614 1.614 0 0 1-1.546-2.082 1.014 1.014 0 0 1 .106-.235l1.973-3.207a1 1 0 1 1 1.7 1.048L14.328 18H16.4a1.6 1.6 0 0 1 1.336 2.489l-1.886 3.038A1 1 0 0 1 15 24Zm5-1a1 1 0 0 1-.222-1.975 3.089 3.089 0 0 0 .007-5.921 2.646 2.646 0 0 1-2.085-1.633 4 4 0 0 0-7.609 2.351 2.018 2.018 0 0 1-1.179 2.306 1.5 1.5 0 0 0 .168 2.816 1.656 1.656 0 0 0 .378.056H11a1 1 0 0 1 0 2H9.429a3.812 3.812 0 0 1-.86-.121 3.5 3.5 0 0 1-.45-6.589 6.345 6.345 0 0 1 .056-2.731 6 6 0 0 1 11.368-.859c.136.326.286.359.587.427l.176.042a5.088 5.088 0 0 1-.083 9.8A1.019 1.019 0 0 1 20 23ZM4.5 17a1 1 0 0 1-.576-.184A9.3 9.3 0 0 1 .051 8.272 9.351 9.351 0 0 1 7.778.117a10 10 0 0 1 3.875.158 2.124 2.124 0 0 1 .943 3.6 8.029 8.029 0 0 0-2.539 4.283 1 1 0 0 1-1.977-.311 9.8 9.8 0 0 1 3.147-5.436.094.094 0 0 0 .025-.1.119.119 0 0 0-.087-.092 8.051 8.051 0 0 0-3.072-.123 7.32 7.32 0 0 0-6.052 6.382 7.2 7.2 0 0 0 3.031 6.706A1 1 0 0 1 4.494 17ZM15 6a1 1 0 0 0 2 0 1 1 0 0 0-2 0Zm4-3a1 1 0 0 0 2 0 1 1 0 0 0-2 0Zm2 6a1 1 0 0 0 2 0 1 1 0 0 0-2 0Z" />
    </svg>
  );
});

ThunderstormMoon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ThunderstormMoon.displayName = 'ThunderstormMoon';

export default ThunderstormMoon;
