import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const TachometerSlow = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M20.445 21.516a3.014 3.014 0 0 1-4.073.128l-1.026-.887a1 1 0 0 1 1.308-1.514l1.027.888a1 1 0 0 0 1.356-.036 10 10 0 1 0-14.113-.039 1.016 1.016 0 0 0 1.395.076l1.027-.889a1 1 0 1 1 1.308 1.514l-1.026.888a3.04 3.04 0 0 1-4.12-.175 12 12 0 0 1 9.875-20.393 11.994 11.994 0 0 1 7.062 20.439ZM12 11a2.01 2.01 0 0 0-.518.068L7.707 7.293a1 1 0 0 0-1.414 1.414l3.775 3.775A2 2 0 1 0 12 11Z" />
  </svg>
));

TachometerSlow.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TachometerSlow.displayName = 'TachometerSlow';

export default TachometerSlow;
