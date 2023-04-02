import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const GrinSquintTears = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M10.515 18.782a1 1 0 0 1-.329-1.817 15.391 15.391 0 0 0 4.079-2.7 15.416 15.416 0 0 0 2.7-4.079 1 1 0 0 1 1.817.329 6.69 6.69 0 0 1-8.267 8.267ZM6.627 18.3c-5.954 7.53 6.93 7.556.974 0a.637.637 0 0 0-.974 0ZM4.935 4.923a10.042 10.042 0 0 1 13.058-.94 1 1 0 1 0 1.2-1.6 12.006 12.006 0 0 0-16.8 16.8 1 1 0 0 0 1.6-1.2 10.043 10.043 0 0 1 .942-13.06ZM23 11.028a1 1 0 0 0-1 1A10.057 10.057 0 0 1 12.025 22a1 1 0 0 0 0 2A12.067 12.067 0 0 0 24 12.031a1 1 0 0 0-1-1.003ZM18.307 7.6c7.559 5.954 7.52-6.929 0-.974a.637.637 0 0 0 0 .974ZM12.2 3.948a1 1 0 0 0-1.176.784l-.708 3.536a1.008 1.008 0 0 0 1.177 1.177l3.536-.707a1 1 0 0 0-.393-1.961l-2.064.412.412-2.064a1 1 0 0 0-.784-1.177Zm-3.932 6.364-3.536.708a1 1 0 1 0 .393 1.96l2.064-.412-.412 2.064a1 1 0 1 0 1.961.393l.707-3.536a1 1 0 0 0-1.177-1.177Z" />
  </svg>
));

GrinSquintTears.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

GrinSquintTears.displayName = 'GrinSquintTears';

export default GrinSquintTears;
