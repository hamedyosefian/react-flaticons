import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const FileInvoice = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="m19.95 5.536-3.485-3.485a6.954 6.954 0 0 0-4.95-2.05H7A5.004 5.004 0 0 0 2 5v14c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5v-8.515c0-1.87-.728-3.627-2.05-4.95ZM18.536 6.95c.318.318.587.671.805 1.05H15c-.551 0-1-.449-1-1V2.659c.379.218.733.487 1.05.805l3.485 3.485ZM20 19c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V5c0-1.654 1.346-3 3-3h4.515c.163 0 .325.008.485.023V7c0 1.654 1.346 3 3 3h4.977c.015.16.023.322.023.485V19Zm-4.5-6h-7A2.503 2.503 0 0 0 6 15.5v2C6 18.878 7.122 20 8.5 20h7c1.378 0 2.5-1.122 2.5-2.5v-2c0-1.378-1.122-2.5-2.5-2.5Zm.5 4.5a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2ZM6 10a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H7a1 1 0 0 1-1-1Zm0-4a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H7a1 1 0 0 1-1-1Z" />
    </svg>
  );
});

FileInvoice.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FileInvoice.displayName = 'FileInvoice';

export default FileInvoice;
