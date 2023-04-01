import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const PepperHot = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M3 3.172a1.01 1.01 0 1 1 2-.006 2.4 2.4 0 0 0 .707 1.713A4.445 4.445 0 0 1 7 8a1 1 0 0 1-2 0 2.434 2.434 0 0 0-.707-1.707A4.382 4.382 0 0 1 3 3.172Zm6 3.52A1.019 1.019 0 1 0 11 7a4.47 4.47 0 0 0-1.293-3.429A2.4 2.4 0 0 1 9 1.864V1a1 1 0 0 0-2 0v.864a4.386 4.386 0 0 0 1.293 3.122A2.394 2.394 0 0 1 9 6.692ZM24 11a12.482 12.482 0 0 1-12 13 11.912 11.912 0 0 1-8.4-3.437C1.038 18.525-2.665 9.481 2.649 9a2.634 2.634 0 0 1 2.569 2.064C6.123 15 7.923 15 8.515 15c2.033 0 3.465-1.626 3.485-3.953a6.07 6.07 0 0 1 4.955-5.941C16.687 2.351 15.171 2 14 2a1 1 0 0 1 0-2c1.752 0 4.618.687 4.965 5.085A6.018 6.018 0 0 1 24 11Zm-8.367-3.2a2.956 2.956 0 0 0 4.733 0 3.926 3.926 0 0 0-4.733 0ZM22 11a3.991 3.991 0 0 0-.348-1.622 4.964 4.964 0 0 1-7.281.028A4.157 4.157 0 0 0 14 11.064C13.972 14.448 11.614 17 8.515 17c-1.818 0-4.2-.952-5.246-5.488a.639.639 0 0 0-1.261.11C2.251 25.7 22.186 25.261 22 11ZM12 24c-.076 0 .075 0 0 0Z" />
    </svg>
  );
});

PepperHot.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PepperHot.displayName = 'PepperHot';

export default PepperHot;
