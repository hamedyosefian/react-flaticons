import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const ThunderstormSun = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M15 24a1 1 0 0 1-.849-1.527L15.684 20h-2.069a1.627 1.627 0 0 1-1.546-2.082.974.974 0 0 1 .106-.235l1.973-3.207a1 1 0 1 1 1.7 1.048L14.328 18H16.4a1.6 1.6 0 0 1 1.336 2.489l-1.886 3.038A1 1 0 0 1 15 24Zm5-1a1 1 0 0 1-.222-1.975 3.089 3.089 0 0 0 .007-5.921 2.646 2.646 0 0 1-2.085-1.633 4 4 0 0 0-7.609 2.351 2.019 2.019 0 0 1-1.18 2.306 1.494 1.494 0 0 0-.85 1.8 1.47 1.47 0 0 0 1.02 1.02 1.649 1.649 0 0 0 .378.052H11a1 1 0 0 1 0 2H9.429a3.8 3.8 0 0 1-.86-.121 3.5 3.5 0 0 1-.451-6.589 6.376 6.376 0 0 1 .057-2.731 6 6 0 0 1 11.368-.859c.136.326.286.359.587.427l.176.042a5.088 5.088 0 0 1-.083 9.8A1.019 1.019 0 0 1 20 23ZM2.073 14a1 1 0 0 1-.5-1.866l2.248-1.3A5.449 5.449 0 0 1 3.6 10H1a1 1 0 0 1 0-2h2.589q.034-.192.081-.384a5.62 5.62 0 0 1 .124-.426L1.551 5.915a1 1 0 1 1 .989-1.738l2.239 1.272a5.525 5.525 0 0 1 .643-.649L4.134 2.572a1 1 0 0 1 1.732-1l1.29 2.235c.148-.052.3-.1.451-.135.131-.032.262-.06.393-.083V1a1 1 0 0 1 2 0v2.6a5.516 5.516 0 0 1 .8.212l1.282-2.255a1 1 0 0 1 1.739.988l-1.279 2.248a5.5 5.5 0 0 1 .615.606l2.274-1.267a1 1 0 0 1 .994 1.736L14.167 7.16a2.021 2.021 0 0 1-2.521-.45 3.5 3.5 0 0 0-3.557-1.1A3.433 3.433 0 0 0 5.612 8.1a3.507 3.507 0 0 0 1.055 3.514A1 1 0 0 1 5.333 13.1a5.382 5.382 0 0 1-.517-.53l-2.244 1.3a1 1 0 0 1-.499.13Z" />
    </svg>
  );
});

ThunderstormSun.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ThunderstormSun.displayName = 'ThunderstormSun';

export default ThunderstormSun;
