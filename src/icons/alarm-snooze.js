import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const AlarmSnooze = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M15.707 10.707 11.414 15H15a1 1 0 1 1 0 2H9a1.002 1.002 0 0 1-.707-1.707L12.586 11H9a1 1 0 0 1 0-2h6a1 1 0 0 1 .707 1.707ZM23 13a10.95 10.95 0 0 1-2.668 7.173C21.178 20.621 22 21.49 22 23a1 1 0 1 1-2 0c0-1-.858-1.194-1.122-1.229a1 1 0 0 1-.189-.045C16.834 23.151 14.514 24 12 24s-4.833-.848-6.687-2.272a1.032 1.032 0 0 1-.203.044c-.252.035-1.11.229-1.11 1.229a1 1 0 0 1-2 0c0-1.51.821-2.378 1.668-2.827A10.95 10.95 0 0 1 1 13.001C1 7.272 5.401 2.553 11 2.046V1a1 1 0 0 1 2 0v1.046C18.599 2.553 23 7.272 23 13Zm-11 9c4.963 0 9-4.038 9-9s-4.037-9-9-9-9 4.038-9 9 4.038 9 9 9Zm7.215-22a1 1 0 1 0 0 2C21.024 2 22 3.288 22 4.5a1 1 0 1 0 2 0C24 1.977 21.898 0 19.215 0ZM2 4.5C2 3.288 2.976 2 4.785 2a1 1 0 0 0 0-2C2.102 0 0 1.977 0 4.5a1 1 0 0 0 2 0Z" />
  </svg>
));

AlarmSnooze.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

AlarmSnooze.displayName = 'AlarmSnooze';

export default AlarmSnooze;
