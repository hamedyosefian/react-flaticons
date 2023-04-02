import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CommentSlash = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="m23.707 22.293-1.536-1.536A4.996 4.996 0 0 0 23 18v-5.69c0-3.433-1.501-6.648-4.119-8.822-2.508-2.085-5.677-2.894-8.919-2.293a10.872 10.872 0 0 0-4.991 2.362L1.707.293A.999.999 0 1 0 .293 1.707l22 22a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414ZM10.329 3.162c2.648-.497 5.232.167 7.275 1.863C19.731 6.792 21 9.514 21 12.309v5.69c0 .451-.102.893-.293 1.293L6.393 4.978a8.862 8.862 0 0 1 3.936-1.816ZM17 22a1 1 0 0 1-1 1h-3.015c-3.781 0-7.234-1.509-9.474-4.14-2.037-2.392-2.876-5.464-2.362-8.645.125-.775.337-1.54.631-2.272a1.001 1.001 0 0 1 1.857.744 8.767 8.767 0 0 0-.513 1.847c-.419 2.595.259 5.092 1.91 7.031 1.859 2.184 4.757 3.436 7.951 3.436H16a1 1 0 0 1 1 1Z" />
  </svg>
));

CommentSlash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CommentSlash.displayName = 'CommentSlash';

export default CommentSlash;
