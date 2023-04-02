import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const TachometerFast = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M24 13a11.914 11.914 0 0 1-3.508 8.47 3.037 3.037 0 0 1-4.12.174l-1.026-.887a1 1 0 0 1 1.308-1.514l1.027.888a1.014 1.014 0 0 0 1.395-.075 10.044 10.044 0 0 0-.414-14.513 9.9 9.9 0 0 0-7.823-2.478 9.992 9.992 0 0 0-5.877 17.029 1 1 0 0 0 1.357.038l1.027-.889a1 1 0 0 1 1.308 1.514l-1.026.888a3.016 3.016 0 0 1-4.073-.129A12 12 0 1 1 24 13Zm-6.293-4.293a1 1 0 0 0-1.414-1.414l-3.775 3.775a2 2 0 1 0 1.414 1.414Z" />
  </svg>
));

TachometerFast.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TachometerFast.displayName = 'TachometerFast';

export default TachometerFast;
