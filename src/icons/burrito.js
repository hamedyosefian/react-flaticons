import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Burrito = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M21 4a3.015 3.015 0 0 0-4.136-2.776A4.031 4.031 0 0 0 12 .545a3.975 3.975 0 0 0-4.868.678C3.875-.024 1.618 4.078 4 6.467V18a6.006 6.006 0 0 0 6 6h4a6.006 6.006 0 0 0 6-6V6.467A3.682 3.682 0 0 0 21 4ZM6.4 3.086a1.9 1.9 0 0 0 2.168-.47 2.009 2.009 0 0 1 2.759-.094 1 1 0 0 0 1.338 0 2.01 2.01 0 0 1 2.759.1 1.9 1.9 0 0 0 2.167.471c1.282-.428 1.807 1.1 1.019 1.936a9.564 9.564 0 0 0-6.226 3.013c-.448-.33-.9-.627-1.354-.909.639-.948 2.51-1.342 1.8-2.671-1.17-1.365-2.656.8-3.6 1.684a10.868 10.868 0 0 0-3.841-1.121C4.6 4.2 5.117 2.664 6.4 3.086ZM14 22h-4a4 4 0 0 1-4-4V7.1c4.125.8 10.688 6.1 11.825 12.069A4.009 4.009 0 0 1 14 22Zm4-7.834A20.427 20.427 0 0 0 13.951 9.3 7.84 7.84 0 0 1 18 7.089ZM12 16a1 1 0 0 1-2 0 1 1 0 0 1 2 0Zm-2 3a1 1 0 0 1-2 0 1 1 0 0 1 2 0Zm3-1a1 1 0 0 1 0 2 1 1 0 0 1 0-2Z" />
    </svg>
  );
});

Burrito.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Burrito.displayName = 'Burrito';

export default Burrito;
