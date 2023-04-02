import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const TachometerAltSlow = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M20 4.052a12 12 0 0 0-16.388 17.52A4.993 4.993 0 0 0 7.12 23h9.767a4.84 4.84 0 0 0 3.354-1.288A12.053 12.053 0 0 0 20 4.052Zm-1.132 16.207a2.862 2.862 0 0 1-1.981.741H7.12a3 3 0 0 1-2.11-.858 10 10 0 1 1 13.858.117ZM20 13a7.932 7.932 0 0 1-2.408 5.715 1 1 0 0 1-1.4-1.43c4.141-3.956.6-11.095-5.05-10.223a1 1 0 0 1-.286-1.981A8.026 8.026 0 0 1 20 13ZM7.806 17.284a1 1 0 0 1-1.4 1.432 7.973 7.973 0 0 1-2.327-6.859 1 1 0 0 1 1.981.286 5.966 5.966 0 0 0 1.746 5.141ZM14 13a2 2 0 1 1-3.932-.518L6.293 8.707a1 1 0 0 1 1.414-1.414l3.775 3.775A2.008 2.008 0 0 1 14 13Z" />
  </svg>
));

TachometerAltSlow.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TachometerAltSlow.displayName = 'TachometerAltSlow';

export default TachometerAltSlow;
