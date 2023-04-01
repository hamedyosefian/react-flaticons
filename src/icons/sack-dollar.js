import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const SackDollar = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M14.648 5.493c.873-.701 1.772-1.643 2.228-2.789a1.948 1.948 0 0 0-.205-1.816A2.018 2.018 0 0 0 15 0H9c-.669 0-1.294.332-1.671.888a1.951 1.951 0 0 0-.205 1.816c.456 1.145 1.355 2.088 2.228 2.789C4.696 7.221 1 13.159 1 18c0 3.309 2.691 6 6 6h10c3.309 0 6-2.691 6-6 0-4.841-3.696-10.779-8.352-12.507Zm.369-3.528c-.516 1.297-2.094 2.393-3.019 2.91-.923-.513-2.495-1.6-2.999-2.875l6.018-.035ZM16.999 22H7c-2.206 0-4-1.794-4-4 0-5.243 4.71-11 9-11s9 5.757 9 11c0 2.206-1.794 4-4 4Zm-5 0a1 1 0 0 1-1-1v-1h-.268a3.01 3.01 0 0 1-2.598-1.499A1 1 0 0 1 9.864 17.5c.178.308.511.5.867.5h2.268c.551 0 1-.449 1-1a.768.768 0 0 0-.644-.76l-3.042-.507A2.762 2.762 0 0 1 7.998 13c0-1.654 1.346-3 3-3V9a1 1 0 0 1 2 0v1h.268c1.067 0 2.063.575 2.598 1.5a1 1 0 0 1-1.731 1.001 1.004 1.004 0 0 0-.867-.5h-2.268c-.551 0-1 .449-1 1 0 .378.271.698.644.76l3.042.507a2.762 2.762 0 0 1 2.315 2.733c0 1.654-1.346 3-3 3v1a1 1 0 0 1-1 1Z" />
    </svg>
  );
});

SackDollar.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SackDollar.displayName = 'SackDollar';

export default SackDollar;
