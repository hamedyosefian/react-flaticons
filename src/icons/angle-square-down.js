import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const AngleSquareDown = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M19 24H5a5.006 5.006 0 0 1-5-5V5a5.006 5.006 0 0 1 5-5h14a5.006 5.006 0 0 1 5 5v14a5.006 5.006 0 0 1-5 5ZM5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3Zm7 14a2.993 2.993 0 0 1-1.987-.752 22.053 22.053 0 0 1-.84-.777L6.3 11.647a1 1 0 0 1 1.4-1.426l2.88 2.829c.188.187.468.441.759.7a1 1 0 0 0 1.323 0c.29-.258.57-.512.752-.693l2.886-2.836a1 1 0 1 1 1.4 1.426l-2.879 2.829c-.2.2-.507.48-.833.769A2.99 2.99 0 0 1 12 16Z" />
    </svg>
  );
});

AngleSquareDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

AngleSquareDown.displayName = 'AngleSquareDown';

export default AngleSquareDown;
