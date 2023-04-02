import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const HouseFlood = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M6.928 20.627ZM6.929 20.631ZM6.928 20.626ZM5.07 20.633c0-.013-.006.013 0 0Z" />
    <path d="M22.332 21.49a2.2 2.2 0 0 1-3.387-.817 1.006 1.006 0 0 0-1.89 0 2.278 2.278 0 0 1-4.11 0 1.006 1.006 0 0 0-1.89 0 2.274 2.274 0 0 1-4.126-.041 1.012 1.012 0 0 0-1.859 0 2.207 2.207 0 0 1-3.4.856 1 1 0 1 0-1.338 1.49A4.186 4.186 0 0 0 6 22.775a4.336 4.336 0 0 0 6 0 4.336 4.336 0 0 0 6 0 4.185 4.185 0 0 0 5.668.2 1 1 0 0 0-1.336-1.485ZM2 17v-5.831a1 1 0 0 1 .293-.707l7.585-7.583a3.008 3.008 0 0 1 4.244 0l7.585 7.586a1.009 1.009 0 0 1 .293.7V17a1 1 0 0 0 1 1 1 1 0 0 0 1-1v-5.831a2.978 2.978 0 0 0-.879-2.121l-7.585-7.586a5.008 5.008 0 0 0-7.072 0L.879 9.048A2.978 2.978 0 0 0 0 11.169V17a1 1 0 0 0 1 1 1 1 0 0 0 1-1Z" />
    <path d="M12 13.031a5 5 0 0 0-4.821 3.681A1.01 1.01 0 0 0 8.14 18a1.034 1.034 0 0 0 .977-.79 3 3 0 0 1 5.766 0 1.034 1.034 0 0 0 .977.79 1.01 1.01 0 0 0 .961-1.288A5 5 0 0 0 12 13.031Z" />
  </svg>
));

HouseFlood.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

HouseFlood.displayName = 'HouseFlood';

export default HouseFlood;
