import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const AlignLeft = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M1 6h22a1 1 0 0 0 0-2H1a1 1 0 0 0 0 2ZM1 11h14a1 1 0 0 0 0-2H1a1 1 0 0 0 0 2ZM15 19H1a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2ZM23 14H1a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2Z" />
  </svg>
));

AlignLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

AlignLeft.displayName = 'AlignLeft';

export default AlignLeft;