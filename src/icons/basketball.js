import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Basketball = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M256.07-.047C114.467-.047-.326 114.746-.326 256.349S114.467 512.744 256.07 512.744s256.395-114.792 256.395-256.395S397.673-.047 256.07-.047zm212.047 233.476-.107-.085a211.947 211.947 0 0 1-112.533-46.933l65.493-65.493a212.274 212.274 0 0 1 47.147 112.511zM390.72 90.731l-65.408 65.6a211.772 211.772 0 0 1-46.933-112.533A212.28 212.28 0 0 1 390.72 90.731zm-154.923-47.04a254.578 254.578 0 0 0 59.371 142.976L256 225.835 121.088 90.923a212.39 212.39 0 0 1 114.709-47.232zM90.913 121.1l-.097-.097.107.085-.01.012L225.835 256l-39.189 39.189a254.319 254.319 0 0 0-142.933-59.392 212.38 212.38 0 0 1 47.2-114.697zm-47.03 157.471v-.085a211.772 211.772 0 0 1 112.533 46.933l-65.493 65.493a212.29 212.29 0 0 1-47.04-112.341zm77.29 142.506 65.408-65.493a211.772 211.772 0 0 1 46.933 112.533 212.29 212.29 0 0 1-112.341-47.04zm155.03 47.232a254.316 254.316 0 0 0-59.392-142.955L256 286.165l134.912 134.912a212.22 212.22 0 0 1-114.709 47.232zm144.832-77.397L286.165 256l39.168-39.168a254.57 254.57 0 0 0 142.933 59.371 212.388 212.388 0 0 1-47.231 114.709z" />
    </svg>
  );
});

Basketball.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Basketball.displayName = 'Basketball';

export default Basketball;
