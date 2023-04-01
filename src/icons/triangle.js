import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Triangle = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M19.948 24H4.052A4.03 4.03 0 0 1 .6 22.088a3.947 3.947 0 0 1-.182-3.86L8.38 4.212a4.068 4.068 0 0 1 7.253.026l7.922 13.941a3.967 3.967 0 0 1-.156 3.909A4.03 4.03 0 0 1 19.948 24ZM12 4a2.013 2.013 0 0 0-1.842 1.129l-.026.049-7.948 13.989a1.919 1.919 0 0 0 .116 1.867A2.044 2.044 0 0 0 4.052 22h15.9a2.044 2.044 0 0 0 1.752-.966 1.937 1.937 0 0 0 .09-1.916l-7.926-13.94A2.039 2.039 0 0 0 12 4Z" />
    </svg>
  );
});

Triangle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Triangle.displayName = 'Triangle';

export default Triangle;
