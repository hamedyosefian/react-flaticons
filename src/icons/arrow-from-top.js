import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ArrowFromTop = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M17.278 17.129 13 21.407V2h5a1 1 0 0 0 0-2H6a1 1 0 0 0 0 2h5v19.421l-4.293-4.292a1 1 0 1 0-1.414 1.414l4.579 4.578a3 3 0 0 0 4.242 0l4.578-4.578a1 1 0 1 0-1.414-1.414Z" />
    </svg>
  );
});

ArrowFromTop.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowFromTop.displayName = 'ArrowFromTop';

export default ArrowFromTop;
