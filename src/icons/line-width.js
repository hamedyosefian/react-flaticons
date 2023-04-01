import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const LineWidth = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M21.5 24h-19A2.5 2.5 0 0 1 0 21.5 2.5 2.5 0 0 1 2.5 19h19a2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1-2.5 2.5zM24 14a2 2 0 0 0-2-2H2a2 2 0 0 0 0 4h20a2 2 0 0 0 2-2zm0-6.5A1.5 1.5 0 0 0 22.5 6h-21A1.5 1.5 0 0 0 0 7.5 1.5 1.5 0 0 0 1.5 9h21A1.5 1.5 0 0 0 24 7.5zM24 2a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h22a1 1 0 0 0 1-1z" />
    </svg>
  );
});

LineWidth.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

LineWidth.displayName = 'LineWidth';

export default LineWidth;
