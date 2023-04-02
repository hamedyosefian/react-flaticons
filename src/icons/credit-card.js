import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CreditCard = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <circle cx="5.5" cy="15.5" r="1.5" />
    <path d="M19 3H5a5.006 5.006 0 0 0-5 5v8a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V8a5.006 5.006 0 0 0-5-5ZM5 5h14a3 3 0 0 1 3 3H2a3 3 0 0 1 3-3Zm14 14H5a3 3 0 0 1-3-3v-6h20v6a3 3 0 0 1-3 3Z" />
  </svg>
));

CreditCard.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CreditCard.displayName = 'CreditCard';

export default CreditCard;
