import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const AngleSmallLeft = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M10.6 12.71a1 1 0 0 1 0-1.42l4.59-4.58a1 1 0 0 0 0-1.42 1 1 0 0 0-1.41 0L9.19 9.88a3 3 0 0 0 0 4.24l4.59 4.59a1 1 0 0 0 .7.29 1 1 0 0 0 .71-.29 1 1 0 0 0 0-1.42Z" />
    </svg>
  );
});

AngleSmallLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

AngleSmallLeft.displayName = 'AngleSmallLeft';

export default AngleSmallLeft;
