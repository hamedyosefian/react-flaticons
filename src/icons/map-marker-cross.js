import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const MapMarkerCross = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="m177.854 284.209 48.776-48.776-48.776-48.776c-8.45-8.161-8.685-21.628-.523-30.078 8.161-8.45 21.628-8.685 30.078-.523.177.171.352.346.523.523l48.776 48.776 48.776-48.776c8.162-8.45 21.628-8.684 30.078-.522 8.45 8.162 8.684 21.628.522 30.078a21.41 21.41 0 0 1-.522.522l-48.776 48.776 48.776 48.776c8.45 8.162 8.684 21.628.522 30.078-8.162 8.45-21.628 8.684-30.078.522a21.41 21.41 0 0 1-.522-.522l-48.776-48.776-48.776 48.776c-8.45 8.162-21.916 7.928-30.078-.522-7.962-8.243-7.962-21.312 0-29.556zM91.853 401.458C-.62 311.19-2.408 163.048 87.861 70.574s238.411-94.261 330.884-3.992a237.916 237.916 0 0 1 3.413 3.401c91.373 91.377 91.373 239.524 0 330.901l-84.916 78.471c-45.059 43.64-116.675 43.461-161.515-.404l-83.874-77.493zM65.264 235.434a190.19 190.19 0 0 0 56.072 135.372l83.704 77.343c28.737 27.463 73.939 27.641 102.891.404l84.746-78.322c74.605-74.929 74.344-196.15-.585-270.755s-196.15-74.344-270.755.585a190.186 190.186 0 0 0-56.073 135.373z" />
    </svg>
  );
});

MapMarkerCross.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MapMarkerCross.displayName = 'MapMarkerCross';

export default MapMarkerCross;
