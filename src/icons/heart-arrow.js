import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const HeartArrow = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M23 17a1 1 0 0 0-1 1v2.586l-2.994-2.994C21.2 15.25 23 12.547 23 9.987a5.745 5.745 0 0 0-5.5-5.949A5.39 5.39 0 0 0 13 6.57a5.39 5.39 0 0 0-4.5-2.532 5.13 5.13 0 0 0-2.428.619L1.707.293A1 1 0 0 0 .293 1.707L4.5 5.915A6.188 6.188 0 0 0 3 9.987c0 3.791 3.951 7.9 7.265 10.676a4.248 4.248 0 0 0 5.47 0 42.092 42.092 0 0 0 1.861-1.654L20.586 22H18a1 1 0 0 0 0 2h4a2 2 0 0 0 2-2v-4a1 1 0 0 0-1-1Zm-8.55 2.132a2.311 2.311 0 0 1-2.9 0C7.387 15.643 5 12.31 5 9.987a3.749 3.749 0 0 1 3.5-3.949A3.749 3.749 0 0 1 12 9.987a1 1 0 1 0 2 0 3.749 3.749 0 0 1 3.5-3.949A3.749 3.749 0 0 1 21 9.987c0 2.322-2.388 5.655-6.55 9.145Z" />
    </svg>
  );
});

HeartArrow.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

HeartArrow.displayName = 'HeartArrow';

export default HeartArrow;
