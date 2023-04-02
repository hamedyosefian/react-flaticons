import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const ChartPyramid = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="m23.413 18.24-7.82-15.965a4 4 0 0 0-7.185 0L.587 18.24A4 4 0 0 0 4.179 24H19.82a4 4 0 0 0 3.593-5.76ZM19.6 15H4.4l2.45-5h10.3ZM10.2 3.155a2 2 0 0 1 3.592 0L16.169 8H7.83Zm11.314 17.9a1.964 1.964 0 0 1-1.7.942H4.179a2 2 0 0 1-1.8-2.88L3.421 17h17.157l1.038 2.12a1.961 1.961 0 0 1-.098 1.938Z" />
    </svg>
  );
});

ChartPyramid.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ChartPyramid.displayName = 'ChartPyramid';

export default ChartPyramid;
