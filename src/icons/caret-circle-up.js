import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CaretCircleUp = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M12 0A12 12 0 1 1 0 12 12.013 12.013 0 0 1 12 0Zm0 22A10 10 0 1 0 2 12a10.011 10.011 0 0 0 10 10Zm5.731-9.6-5.087-5.15a.9.9 0 0 0-1.288 0L6.269 12.4a.924.924 0 0 0 .644 1.575h10.174a.924.924 0 0 0 .644-1.575Z" />
  </svg>
));

CaretCircleUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CaretCircleUp.displayName = 'CaretCircleUp';

export default CaretCircleUp;
