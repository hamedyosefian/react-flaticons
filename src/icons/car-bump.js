import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CarBump = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M23.229 23.973a1 1 0 0 1-1.2-.744c-.7-2.946-5.316-2.915-6.057.016a1 1 0 1 1-1.94-.49c1.231-4.947 8.773-4.935 9.943.016a1 1 0 0 1-.746 1.202ZM8.854 19.251a2 2 0 0 1-3.707 1.5l-.076-.185a4.01 4.01 0 0 1-4.027-2.483l-.529-1.3A9.919 9.919 0 0 1 0 13.385s.121-5.242.125-5.279A5.012 5.012 0 0 1 3.2 4.138l7.108-2.775a5 5 0 0 1 4.958.7l3.818 3.476A7.281 7.281 0 0 1 21.175 8.5l.53 1.3a4.017 4.017 0 0 1-.973 4.429l.069.168a2 2 0 0 1-3.681 1.563ZM2.115 8.321 2 13.383 17.8 7.07l-3.826-3.477a2.988 2.988 0 0 0-2.927-.372L3.939 6a3 3 0 0 0-1.824 2.321ZM5.5 18.432l13.255-5.272a2 2 0 0 0 1.1-2.6l-.529-1.3a7.204 7.204 0 0 0-.247-.54l-1.834.733.381.937a1 1 0 1 1-1.853.753l-.385-.948-9.522 3.797.363.915a1 1 0 0 1-1.858.738l-.362-.911-1.809.724a3.637 3.637 0 0 0 .172.57l.529 1.3A2 2 0 0 0 5.5 18.432Z" />
    </svg>
  );
});

CarBump.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CarBump.displayName = 'CarBump';

export default CarBump;
