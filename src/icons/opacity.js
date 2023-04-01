import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Opacity = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M2.886 6.836a1 1 0 0 0 .829-.436 10.015 10.015 0 0 1 2.809-2.77 1 1 0 1 0-1.1-1.672A12 12 0 0 0 2.06 5.275a1 1 0 0 0 .826 1.561ZM2 12a10.112 10.112 0 0 1 .193-1.969 1 1 0 1 0-1.961-.392 12.135 12.135 0 0 0 0 4.728 1 1 0 0 0 .98.8 1.019 1.019 0 0 0 .2-.019 1 1 0 0 0 .784-1.177A10.1 10.1 0 0 1 2 12ZM6.528 20.372a10 10 0 0 1-2.81-2.766 1 1 0 0 0-1.656 1.123 11.993 11.993 0 0 0 3.37 3.315 1 1 0 0 0 1.1-1.672ZM12 0a12.107 12.107 0 0 0-2.171.2 1 1 0 0 0 .179 1.984 1.126 1.126 0 0 0 .181-.016A10.033 10.033 0 0 1 12 2v20a10.033 10.033 0 0 1-1.811-.164 1 1 0 0 0-.36 1.968A12.01 12.01 0 0 0 24 12 12.013 12.013 0 0 0 12 0Z" />
    </svg>
  );
});

Opacity.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Opacity.displayName = 'Opacity';

export default Opacity;
