import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const PingPong = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M21.261 2.739A9.836 9.836 0 0 0 8.3 2.114a4.489 4.489 0 1 0-4.166 6.849 9.415 9.415 0 0 0 .842 5.668.5.5 0 0 1-.07.564L2 16.945A3.743 3.743 0 0 0 3.735 24a3.891 3.891 0 0 0 .457-.027 3.705 3.705 0 0 0 2.725-1.735l2.068-3.127a.5.5 0 0 1 .575-.089 9.663 9.663 0 0 0 11.315-2.147A10.5 10.5 0 0 0 24 9.758a9.409 9.409 0 0 0-2.739-7.019ZM2 4.5A2.5 2.5 0 1 1 4.5 7 2.5 2.5 0 0 1 2 4.5Zm8.44 12.726a2.494 2.494 0 0 0-3.017.632 1.166 1.166 0 0 0-.067.09l-2.127 3.218A1.742 1.742 0 0 1 2.02 20a1.76 1.76 0 0 1 .961-1.312l3.041-1.831a.956.956 0 0 0 .126-.09 2.49 2.49 0 0 0 .623-3.016 7.331 7.331 0 0 1-.693-4.259l8.433 8.433a7.31 7.31 0 0 1-4.071-.699Zm9.021-1.765a8.871 8.871 0 0 1-2.732 1.865c-.009-.01-.012-.023-.022-.033L7.36 7.945A4.473 4.473 0 0 0 9 4.5c0-.119-.026-.231-.035-.347a8.01 8.01 0 0 1 10.882 0A7.423 7.423 0 0 1 22 9.7a8.506 8.506 0 0 1-2.539 5.761Z" />
  </svg>
));

PingPong.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PingPong.displayName = 'PingPong';

export default PingPong;
