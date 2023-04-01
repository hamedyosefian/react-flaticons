import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const FileInvoiceDollar = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M16 23a1 1 0 0 1-1 1H6c-2.757 0-5-2.243-5-5V5c0-2.757 2.243-5 5-5h4.515c1.869 0 3.627.728 4.95 2.05l3.484 3.486c.271.271.523.568.748.883a1 1 0 0 1-1.627 1.162 4.978 4.978 0 0 0-.534-.63l-3.485-3.486A5.011 5.011 0 0 0 13 2.66V7c0 .551.448 1 1 1h3a1 1 0 1 1 0 2h-3c-1.654 0-3-1.346-3-3V2.023A5.198 5.198 0 0 0 10.515 2H6C4.346 2 3 3.346 3 5v14c0 1.654 1.346 3 3 3h9a1 1 0 0 1 1 1Zm5.685-6.733-3.041-.507A.768.768 0 0 1 18 15c0-.551.448-1 1-1h2.268c.356 0 .688.192.867.5a1 1 0 1 0 1.73-1.001 3.009 3.009 0 0 0-2.598-1.5h-.268v-1a1 1 0 1 0-2 0v1c-1.654 0-3 1.346-3 3 0 1.36.974 2.51 2.315 2.733l3.041.507a.768.768 0 0 1 .644.76c0 .551-.448 1-1 1h-2.268c-.356 0-.688-.192-.867-.5a.998.998 0 0 0-1.366-.365.998.998 0 0 0-.364 1.366 3.008 3.008 0 0 0 2.598 1.499H19v1a1 1 0 1 0 2 0v-1c1.654 0 3-1.346 3-3 0-1.36-.974-2.51-2.315-2.733ZM7.5 15H13a1 1 0 1 0 0-2H7.5A2.503 2.503 0 0 0 5 15.5v2C5 18.878 6.122 20 7.5 20H13a1 1 0 1 0 0-2H7.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5ZM6 11h2a1 1 0 0 0 0-2H6a1 1 0 0 0 0 2Zm0-4h2a1 1 0 0 0 0-2H6a1 1 0 0 0 0 2Z" />
    </svg>
  );
});

FileInvoiceDollar.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FileInvoiceDollar.displayName = 'FileInvoiceDollar';

export default FileInvoiceDollar;
