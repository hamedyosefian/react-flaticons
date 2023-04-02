import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Guitar = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <circle cx="10" cy="14" r="2" />
    <path d="M5.707 16.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 1 0 1.414-1.414Z" />
    <path d="M23.482.518a1.767 1.767 0 0 0-2.5 0l-.214.214a6.035 6.035 0 0 0-1.534 2.62l-2.975 2.975a5.894 5.894 0 0 0-7.7.232 4.933 4.933 0 0 0-.445.508 2.283 2.283 0 0 1-1.554.959 7.055 7.055 0 0 0-4.5 2.038c-2.956 2.957-2.7 8.025.575 11.3A8.8 8.8 0 0 0 8.814 24a7.164 7.164 0 0 0 5.122-2.059 7.055 7.055 0 0 0 2.038-4.5 2.283 2.283 0 0 1 .959-1.554 4.933 4.933 0 0 0 .508-.445 5.9 5.9 0 0 0 .232-7.7l2.975-2.975a6.035 6.035 0 0 0 2.62-1.534l.214-.214a1.767 1.767 0 0 0 0-2.501Zm-7.455 13.509a2.888 2.888 0 0 1-.3.265 4.192 4.192 0 0 0-1.745 2.99 5.072 5.072 0 0 1-1.458 3.239c-2.175 2.175-5.975 1.92-8.468-.574s-2.756-6.292-.577-8.468a5.072 5.072 0 0 1 3.239-1.458 4.192 4.192 0 0 0 2.99-1.745 2.888 2.888 0 0 1 .265-.3A3.41 3.41 0 0 1 12.419 7a4.435 4.435 0 0 1 2.415.752l-1.541 1.541a1 1 0 1 0 1.414 1.414l1.538-1.538a3.858 3.858 0 0 1-.218 4.858Z" />
  </svg>
));

Guitar.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Guitar.displayName = 'Guitar';

export default Guitar;
