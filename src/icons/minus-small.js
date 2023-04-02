import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const MinusSmall = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <rect width="12" height="2" x="6" y="11" rx="1" />
  </svg>
));

MinusSmall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MinusSmall.displayName = 'MinusSmall';

export default MinusSmall;
