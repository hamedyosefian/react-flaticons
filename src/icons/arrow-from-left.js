import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ArrowFromLeft = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="m23.121 9.886-4.579-4.579a1 1 0 0 0-1.414 1.414L21.407 11H2V6a1 1 0 0 0-2 0v12a1 1 0 0 0 2 0v-5h19.422l-4.294 4.293a1 1 0 1 0 1.414 1.414l4.58-4.578a3 3 0 0 0-.001-4.243Z" />
    </svg>
  );
});

ArrowFromLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowFromLeft.displayName = 'ArrowFromLeft';

export default ArrowFromLeft;
