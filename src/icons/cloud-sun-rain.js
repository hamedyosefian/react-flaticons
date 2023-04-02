import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CloudSunRain = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M18.986 24a1 1 0 0 1-1-1v-3a1 1 0 0 1 2 0v3a1 1 0 0 1-1 1Zm-4 0a1 1 0 0 1-1-1v-3a1 1 0 0 1 2 0v3a1 1 0 0 1-1 1Zm-4 0a1 1 0 0 1-1-1v-3a1 1 0 0 1 2 0v3a1 1 0 0 1-1 1ZM8 22.487a.992.992 0 0 1-.6-.2 3.45 3.45 0 0 1-1.281-1.882 3.5 3.5 0 0 1 2-4.142 6.349 6.349 0 0 1 .056-2.732 6 6 0 0 1 11.368-.854c.136.324.286.358.587.426l.178.043a5.012 5.012 0 0 1 3.557 6 4.9 4.9 0 0 1-1.117 2.154 1 1 0 0 1-1.5-1.328 2.9 2.9 0 0 0 .664-1.272 3.021 3.021 0 0 0-2.132-3.621 2.647 2.647 0 0 1-2.08-1.633 4 4 0 0 0-7.613 2.354 2.016 2.016 0 0 1-1.179 2.3 1.494 1.494 0 0 0-.852 1.8 1.46 1.46 0 0 0 .541.787 1 1 0 0 1-.6 1.8ZM2.073 14a1 1 0 0 1-.5-1.866l2.248-1.3A5.477 5.477 0 0 1 3.6 10H1a1 1 0 0 1 0-2h2.589a5.831 5.831 0 0 1 .205-.81L1.552 5.915a1 1 0 0 1 .988-1.738l2.239 1.272a5.525 5.525 0 0 1 .643-.649L4.134 2.572a1 1 0 0 1 1.732-1l1.29 2.235c.148-.052.3-.1.451-.135.131-.032.262-.06.393-.083V1a1 1 0 0 1 2 0v2.6a5.516 5.516 0 0 1 .8.212l1.282-2.255a1 1 0 0 1 1.738.988l-1.28 2.253a5.582 5.582 0 0 1 .615.606l2.273-1.267a1 1 0 0 1 .994 1.736L14.167 7.16a2.017 2.017 0 0 1-2.521-.451 3.5 3.5 0 0 0-3.557-1.1A3.434 3.434 0 0 0 5.611 8.1a3.512 3.512 0 0 0 1.056 3.514A1 1 0 0 1 5.333 13.1a5.5 5.5 0 0 1-.517-.53l-2.244 1.3a.992.992 0 0 1-.499.13Z" />
  </svg>
));

CloudSunRain.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CloudSunRain.displayName = 'CloudSunRain';

export default CloudSunRain;
