import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ArrowUpSquareTriangle = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M17 10h3c1.654 0 3-1.346 3-3V4c0-1.654-1.346-3-3-3h-3c-1.654 0-3 1.346-3 3v3c0 1.654 1.346 3 3 3Zm-1-6c0-.551.449-1 1-1h3c.551 0 1 .449 1 1v3c0 .551-.449 1-1 1h-3c-.551 0-1-.449-1-1V4Zm7.196 15.583-2.689-4.387c-.399-.737-1.169-1.195-2.007-1.195s-1.608.458-1.981 1.149l-2.741 4.479c-.387.714-.37 1.558.046 2.256S14.973 23 15.786 23h5.43c.812 0 1.546-.417 1.962-1.115s.433-1.542.02-2.302Zm-1.738 1.279a.272.272 0 0 1-.244.139h-5.43a.271.271 0 0 1-.244-.139c-.038-.063-.069-.163-.032-.234l2.741-4.479c.067-.123.172-.148.25-.148s.183.026.275.194l2.688 4.387a.274.274 0 0 1-.005.28ZM11.707 6.293a.999.999 0 0 0 0-1.414L7.414.586C7.024.196 6.512 0 6 0S4.976.195 4.586.585L.293 4.879a.999.999 0 1 0 1.414 1.414L5 3v20a1 1 0 1 0 2 0V3l3.293 3.293a.999.999 0 0 0 1.414 0Z" />
    </svg>
  );
});

ArrowUpSquareTriangle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowUpSquareTriangle.displayName = 'ArrowUpSquareTriangle';

export default ArrowUpSquareTriangle;
