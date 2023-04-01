import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ChartPyramid = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
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
