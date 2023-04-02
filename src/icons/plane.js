import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Plane = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M21 10h-3.307l-4.247-8.437A3 3 0 0 0 10.812 0h-.182A2.63 2.63 0 0 0 8.1 3.361L10.028 10H7.644a2.982 2.982 0 0 1-2.122-.879L4.105 7.7a2.409 2.409 0 0 0-2.814-.433A2.319 2.319 0 0 0 .125 8.689a2.525 2.525 0 0 0 .228 1.966l1.614 2.825A5.012 5.012 0 0 0 6.308 16h3.711l-1.668 4.447A2.629 2.629 0 0 0 10.812 24a2.972 2.972 0 0 0 2.605-1.513L17.464 16H21a3 3 0 0 0 0-6ZM10.025 2.805A.63.63 0 0 1 10.63 2h.182a.989.989 0 0 1 .863.491L15.455 10H12.11ZM21 14h-4.091a1 1 0 0 0-.848.471l-4.371 7.008a1 1 0 0 1-.878.521.628.628 0 0 1-.588-.85l2.174-5.8a1 1 0 0 0-.937-1.35H6.308a3 3 0 0 1-2.6-1.512L2.089 9.662a.523.523 0 0 1-.047-.4.323.323 0 0 1 .158-.211A.437.437 0 0 1 2.4 9a.415.415 0 0 1 .287.118l1.417 1.417A4.972 4.972 0 0 0 7.644 12H21a1 1 0 0 1 0 2Z" />
    </svg>
  );
});

Plane.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Plane.displayName = 'Plane';

export default Plane;
