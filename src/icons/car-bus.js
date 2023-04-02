import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CarBus = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M24 19a15.921 15.921 0 0 0-1.23-6.153l-.321-.77A4.988 4.988 0 0 0 17.833 9h-3.666a4.988 4.988 0 0 0-4.616 3.077l-.32.769c-.9 2.642-2.7 7.576.769 8.982V22a2 2 0 0 0 4 0h4a2 2 0 0 0 4 0v-.172A3 3 0 0 0 24 19Zm-12.6-6.154A2.994 2.994 0 0 1 14.167 11h3.666a2.994 2.994 0 0 1 2.77 1.846l.32.77c.054.127.1.255.154.384H10.924a14 14 0 0 1 .153-.385ZM21 20H11c-1.757-.17-.77-2.869-.676-4H12v1a1 1 0 0 0 2 0v-1h4v1a1 1 0 0 0 2 0v-1h1.676c.093 1.129 1.081 3.831-.676 4ZM6.5 11H4V6.265c0-.089 0-.177.009-.265H9v1a1 1 0 0 0 2 0V6h4.991c.005.088.009.176.009.265V7a1 1 0 0 0 2 0v-.735A5.946 5.946 0 0 0 13.668.5a13.737 13.737 0 0 0-7.336 0A5.946 5.946 0 0 0 2 6.265V9a2 2 0 0 0 0 4v3a3.006 3.006 0 0 0 2 2.829V20a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1 1 1 0 0 1-1-1v-3h2.5a1 1 0 0 0 0-2Zm.355-8.568a11.723 11.723 0 0 1 6.29 0A3.826 3.826 0 0 1 15.313 4H4.687a3.826 3.826 0 0 1 2.168-1.568Z" />
  </svg>
));

CarBus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CarBus.displayName = 'CarBus';

export default CarBus;
