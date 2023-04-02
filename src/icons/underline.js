import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Underline = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M12 20a8.009 8.009 0 0 0 8-8V1a1 1 0 0 0-2 0v11a6 6 0 0 1-12 0V1a1 1 0 0 0-2 0v11a8.009 8.009 0 0 0 8 8ZM23 22H1a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2Z" />
  </svg>
));

Underline.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Underline.displayName = 'Underline';

export default Underline;
