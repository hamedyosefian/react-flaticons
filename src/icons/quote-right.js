import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const QuoteRight = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M8 4H4a4 4 0 0 0-4 4v4a2 2 0 0 0 2 2h5.91A6.006 6.006 0 0 1 2 19a1 1 0 0 0 0 2 8.009 8.009 0 0 0 8-8V6a2 2 0 0 0-2-2ZM22 4h-4a4 4 0 0 0-4 4v4a2 2 0 0 0 2 2h5.91A6.006 6.006 0 0 1 16 19a1 1 0 0 0 0 2 8.009 8.009 0 0 0 8-8V6a2 2 0 0 0-2-2Z" />
  </svg>
));

QuoteRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

QuoteRight.displayName = 'QuoteRight';

export default QuoteRight;
